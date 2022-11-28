import React from 'react'

import '../styles/globals.css'
import Layout from '../components/layout'

import Router from 'next/router';
import NProgress from 'nprogress';
import '../styles/nprogress.css';

export const SidebarStateContext = React.createContext({
    isSidebarOpen: false,
    toggleSidebar: (value) => {},
})

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false })

function MyApp({ Component, pageProps }) {
    var [isSidebarOpen, setisSidebarOpen] = React.useState(false);

    return (
        <SidebarStateContext.Provider value={{
            isSidebarOpen: isSidebarOpen,
            toggleSidebar: (value) => {
                setisSidebarOpen(value ? value : !isSidebarOpen)
            }
        }}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SidebarStateContext.Provider>
    )
}

export default MyApp
