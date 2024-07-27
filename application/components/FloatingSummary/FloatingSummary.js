'use client'
import { Button, Flex, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import store from "@/app/store/Store";

export default function FloatingSummary() {
    const router = useRouter();
    const [cart, setCart] = useAtom(store.cart);
    const [order, setOrder] = useAtom(store.order)

    const handleCheckout = () => {
        // Handle checkout logic
        setOrder(cart)
        setCart([])
        // Redirect to success page
        router.push('/success');
    };

    return (
        <Flex direction="column" justify="center" align="center" className="fs_container">
            <Text as="span"></Text>
            <Button className="checkout" onClick={handleCheckout}>Checkout</Button>
        </Flex>
    );
}
