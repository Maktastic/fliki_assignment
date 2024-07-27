'use client'
import {useContext, useState} from "react";
import {useRouter} from "next/navigation";
import * as Form from '@radix-ui/react-form';
import {Button} from "@radix-ui/themes";
import { toast } from 'react-toastify';
import {AuthContext} from "@/contexts/Auth/AuthContext";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await login(email, password);

        if (res.ok) {
            // Handle successful login
            await router.push('/'); // Redirect to dashboard or home page
            toast('Login successful', { type: 'success' });
        } else {
            // Handle login failure
            toast('Invalid email or password', { type: 'error' });
        }
    };

    return (
        <Form.Root onSubmit={handleSubmit} className={'login-form'} style={{ maxWidth: 300, margin: 'auto' }}>
            <Form.Field name="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control asChild>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5em', marginBottom: '1em' }}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field name="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control asChild>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5em', marginBottom: '1em' }}
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Button style={{ width: '100%', padding: '0.5em' }}>Login</Button>
            </Form.Submit>
        </Form.Root>
    )
}