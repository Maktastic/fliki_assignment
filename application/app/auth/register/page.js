'use client'
import RegisterForm from "@/components/Register/RegisterForm";
import {useEffect} from "react";
import store from "@/app/store/Store";
import {useAtom} from "jotai";


export default function register() {
    const [title, setTitle] = useAtom(store.titleAtom)
    useEffect(() => {
        setTitle('Register')
    }, []);

    return ( 
        <RegisterForm />
    )
}