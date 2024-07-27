'use client'
import * as Radix from '@radix-ui/themes'
import ProductCard from "@/components/ProductCard/ProductCard";
import {Flex, Grid} from "@radix-ui/themes";
import useIsMobile from "@/app/utils/useIsMobile";
import {useEffect, useState} from "react";
import axios from "axios";
import Loader from "@/components/Loader/Loader";
import { ToastContainer } from 'react-toastify';
import store from "@/app/store/Store";
import {useAtom} from "jotai";

export default function Home() {

    const isMobile = useIsMobile();
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useAtom(store.titleAtom);
    
    const getProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/product')
            
            if(!response.data) {
                setProduct([])
            } 
            setProduct(response.data.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setTitle('Home')
        getProducts()
    }, [])
    
    function loopProducts() {
        let products = [];
        for (let i = 0; i < 6; i++) {
            products.push(<ProductCard product={product[i]} key={i} />);
        }
        return (
            !isMobile ? <Grid columns={'3'} gap={'8'}>{ products }</Grid> : <Grid columns={'1'} gap={'8'}>{ products }</Grid>
        );
    }

    return (
        <Radix.Container>
            <div className={'home'}>

                { product && product.length !== 0 ?
                    <Flex py={'8'} justify={'center'}>
                        { loopProducts() }
                    </Flex>
                    : <Loader />
                }

            </div>
        </Radix.Container>
          
    );
}
