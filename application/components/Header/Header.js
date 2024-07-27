'use client'
import {Avatar, Button, Flex, Grid} from "@radix-ui/themes";
import {PersonIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import store from "@/app/store/Store";
import useIsMobile from "@/app/utils/useIsMobile";

import HeaderDropdown from "@/components/HeaderDropdown/HeaderDropdown";
import CartIcon from "@/components/CartIcon/CartIcon";
import {useContext, useEffect} from "react";
import {AuthContext} from "@/contexts/Auth/AuthContext";

export default function Header() {

    // Get Title
    const [title, setTitle] = useAtom(store.titleAtom)
    const isMobile = useIsMobile();
    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {
        setTitle(title)
    }, [title]);
    
    return (
        <div className={'header'}>
            { !isMobile ?
                <Grid columns={'3'} p={'4'} align={'center'}>
                    <div className={'navigation'}>
                        <Flex justify={'start'} gap={'4'}>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Contact</li>
                        </Flex>
                    </div>

                    <Flex align={'center'} justify={'center'}>
                        <span className={'title'}>{title}</span>
                    </Flex>

                    <Flex className={'header-btn'} justify={"end"} align={'center'} gap={'4'}>
                        <PersonIcon className={'person-icon'} />
                        <Button className={'login'} variant={'soft'} color={'cyan'} radius={'medium'}>
                            Login
                        </Button>
                        <Button className={'register'} variant={'soft'} color={'cyan'} radius={'medium'}>
                            Register
                        </Button>
                    </Flex>

                </Grid>  :
                <Grid columns={'3'} p={'4'} mx={'4'} align={'center'} justify={'between'}>

                    <HeaderDropdown/>

                    <Flex align={'center'} justify={'center'}>
                        <span className={'title'}>{title}</span>
                    </Flex>

                    <CartIcon className={'cart-icon'}/>

                </Grid>
            }

        </div>
    );
    
    
}