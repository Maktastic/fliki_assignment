'use client'
import {useAtom} from "jotai";
import store from "@/app/store/Store";
import CartProductCard from "@/components/CartProductCard/CartProductCard";
import {Flex} from '@radix-ui/themes'
import {Text} from '@radix-ui/themes'
import FloatingSummary from "@/components/FloatingSummary/FloatingSummary";
import {useEffect} from "react";

export default function Cart() {
    const [cart] = useAtom(store.cart);
    const [title, setTitle] = useAtom(store.titleAtom)

    useEffect(() => {
        setTitle('Cart')
    }, []);

    return (
        <Flex direction="column" p="4" justify={'center'} align={'center'}>
            {!cart || cart.length === 0 ? (
                <Text as="span" className={'no-items'}>No Items in Cart</Text>
            ) : (
                cart.map((product) => <CartProductCard product={product} key={product.id} />)
            )}
            <FloatingSummary />
        </Flex>
    );
    
}