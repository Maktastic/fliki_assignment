import { Inter } from "next/font/google";
import "./globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import '@radix-ui/themes/styles.css';
import { Provider } from 'jotai';
import * as Radix from '@radix-ui/themes'
import Header from "@/components/Header/Header";
import {Container} from "@radix-ui/themes";
import {AuthProvider} from "@/contexts/Auth/AuthContext";
import {ToastContainer} from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fliki Test",
  description: "Next Fliki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}>
            <Provider>
                <Radix.Theme>
                        <Container>
                            <AuthProvider>
                                <Header/>
                                <div className={'content'}>
                                    {children}
                                </div>
                                <ToastContainer position={'bottom-center'} autoClose={"3000"} />
                            </AuthProvider>
                        </Container>
                </Radix.Theme>
            </Provider>
        </body>
      
    </html>
  );
}
