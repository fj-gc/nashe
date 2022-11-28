import React from 'react'

import '../styles/globals.css'
import Layout from '../components/layout'

export const SidebarStateContext = React.createContext({
    isSidebarOpen: false,
    toggleSidebar: (value) => {},
})

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
