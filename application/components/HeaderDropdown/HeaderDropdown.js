'use client'
import { DropdownMenu } from "@radix-ui/themes";
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {AuthContext} from "@/contexts/Auth/AuthContext";
import {useContext, useState} from "react";
import { router } from 'next/navigation';

export default function HeaderDropdown() {
    const [open ,setOpen] = useState(false)
    const { user, logout } = useContext(AuthContext);

    const checkIsLoggedIn = user !== null
    
    function handleChange() {
        return setOpen(!open)
    }

    function handleLogout() {
        logout()
        setOpen(false)
        router.push('/').catch(() => {})
    }

    return (
        <DropdownMenu.Root className={'mobile-menu'} open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger>
                <HamburgerMenuIcon className={'menu-icon'} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className={'menu-items'}>
                {
                    checkIsLoggedIn ? <DropdownMenu.Item>Welcome User</DropdownMenu.Item> : null
                }
                <DropdownMenu.Item><Link href={'/'} className={'link'}>Home</Link></DropdownMenu.Item>
                <DropdownMenu.Item>Products</DropdownMenu.Item>
                <DropdownMenu.Item>Contact</DropdownMenu.Item>

                <DropdownMenu.Separator />
                {
                    !checkIsLoggedIn ? <DropdownMenu.Item><Link href={'/auth/login'} className={'link'}>Login</Link></DropdownMenu.Item> : null
                }

                {
                    !checkIsLoggedIn ? <DropdownMenu.Item><Link href={'/auth/register'} className={'link'}>Register</Link></DropdownMenu.Item> : null
                }

                {
                    checkIsLoggedIn ? <DropdownMenu.Item onClick={() => handleLogout() }>Logout</DropdownMenu.Item> : null
                }

            </DropdownMenu.Content>
        </DropdownMenu.Root>
    )
    
}