'use client'
import LoginForm from "@/components/Login/LoginForm";
import store from "@/app/store/Store";
import {useAtom} from "jotai";
import {useEffect} from "react";


export default function login() {
    const [title, setTitle] = useAtom(store.titleAtom)

    useEffect(() => {
        setTitle('Login')
    }, []);

    return (
        <LoginForm />
    )
}