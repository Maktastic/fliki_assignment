'use client'
import store from "@/app/store/Store";
import { useAtom } from 'jotai';
import {Flex, Text} from "@radix-ui/themes";
import OrderProductCard from "@/components/OrderProductCard/OrderProductCard";

export default function Success() {

    const [order, setOrder] = useAtom(store.order);

    function checkOrder() {
        if(order && order.length !== 0) {
            return (
                <Flex direction={'column'} p={'4'} align={'center'} gap={'4'}>
                    <Text>Order Placed Successfully</Text>
                    <Text>Thank you for shopping with us</Text>
                    { order.map(items => {
                        return (
                            <OrderProductCard product={items} key={items.id}/>
                        )
                    })}
                </Flex>
            )
        }

        return <Text>No Orders Available</Text>
    }

    return (
        <Flex className={'order-container'} direction={'column'}>
            { checkOrder() }
        </Flex>
    )
}