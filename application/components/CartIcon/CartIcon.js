'use client'
import { BsCart4 } from "react-icons/bs";
import {Badge, Flex} from "@radix-ui/themes";
import {useAtom} from "jotai";
import {cartCountAtom} from "@/app/store/Store";
import Link from "next/link";

export default function CartIcon() {
    const [cartCount] = useAtom(cartCountAtom)
    
    return (
        
        <Flex align={'center'} justify={'end'}>
            <Link href={'/cart'} className={'link'}><BsCart4 className={'cart-icon'} /></Link>
            <Badge>{cartCount}</Badge>
        </Flex>
        
    )
}