'use client'
import {Box, Button, Card, Flex, Inset, Text} from "@radix-ui/themes";
import "./ProductCard.module.scss";
import {useAtom} from "jotai";
import store from "@/app/store/Store";
import {useEffect} from "react";


export default function ProductCard({ product }) {
    
    const [cart, setCart] = useAtom(store.cart)

    function addToCart(product) {
        setCart((cart) => {
            const existingProduct = cart.find((item) => item.id === product.id);

            if (existingProduct) {
                return cart.map((item) =>
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                );
            } else {
                return [...cart, { ...product, qty: 1 }];
            }
        });
    }

    return (
        <Box maxWidth={'240px'} className={'product-card'}>
            <Card size="2">
                <Inset clip="padding-box" side="top" pb="current">
                    <img
                        src={ product ? product.image : '' }
                        alt="Bold typography"
                        className={'product-image'}
                    />
                </Inset>
                
                <Flex direction={'column'} gap={'3'}>

                    <Text as="p" size="3" className={'product_name'}>
                        {product.name ? product.name : ''}
                    </Text>

                    <Text as="span" size="3" className={'product_description'}>
                        {product.description ? product.description : ''}
                    </Text>

                    <Text as="span" size="3" align={'right'} className={'product_price'}>
                        { product.currency ? product.currency  : '' } { product.price ?product.price : '' }
                    </Text>

                    <Button variant={'soft'} className={'add_to_cart'} onClick={() => addToCart(product)}>Add To Cart</Button>

                </Flex>

            </Card>
        </Box>
    )
}