import { useState } from 'react';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}