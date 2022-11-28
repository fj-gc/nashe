import { useEffect, useRef, useContext } from "react";

import Link from "next/link";

import { XMarkIcon, HomeIcon, DocumentCheckIcon, PuzzlePieceIcon, PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

import { SidebarStateContext } from '../../pages/_app';

import styles from "./Navbar.module.css";

export default function Navbar() {
    var sidebarRef = useRef(null);
    var openSidebarButtonRef = useRef(null);
    var closeSidebarButtonRef = useRef(null);

    var sidebarContext = useContext(SidebarStateContext);

    function closeSidebar() {
        sidebarContext.toggleSidebar(false);
    }

    function openSidebar() {
        sidebarContext.toggleSidebar(true);
    }

    useEffect(() => {
        if (sidebarRef.current && openSidebarButtonRef.current) {
            openSidebarButtonRef.current.addEventListener('click', openSidebar);
        }

        if (sidebarRef.current && closeSidebarButtonRef.current) {
            closeSidebarButtonRef.current.addEventListener('click', closeSidebar);
        }

        return () => {
            openSidebarButtonRef.current.removeEventListener('click', openSidebar);
            closeSidebarButtonRef.current.removeEventListener('click', closeSidebar);
        }
    }, []);

    return (
        <>
            <div className="sticky top-0 left-0 right-0 transition flex flex-col items-center py-6 px-8 cursor-default bg-black z-50">
                <div className="w-full max-w-6xl flex flex-row items-center justify-between">
                    <button className="p-3 rounded-full hover:bg-neutral-800 -m-3 md:hidden" ref={openSidebarButtonRef}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div className="flex flex-row items-center gap-8">
                        <Link className="hover:underline hover:text-red-200 hidden md:block" href="/">
                            <h5 className="text-3xl font-bold leading-none font-bebas">
                                🤘NASHE🤘
                            </h5>
                        </Link>
                        <Link className="hover:underline hover:text-red-200 hidden md:block" href="img/nashe.jpg">
                            Boleta
                        </Link>
                        <Link className="hover:underline hover:text-red-200 hidden md:block" href="propuestas">
                            Propuestas
                        </Link>
                        <Link className="hover:underline hover:text-red-200 hidden md:block" href="jueguitos">
                            Jueguitos
                        </Link>
                    </div>
                    <div className="text-xl hidden lg:block">
                        <span className={`${styles.nameUnderline} ${styles.yellow}`}>Juanma Lupacchini</span> y <span className={`${styles.nameUnderline} ${styles.red}`}>Fran Grecco</span>
                    </div>
                </div>
            </div>
            <div className={styles.sidebar + (sidebarContext.isSidebarOpen ? " " + styles.open : "")} ref={sidebarRef}>
                <div>
                    <div className="flex flex-row items-center justify-between p-6">
                        <h5 className={`text-3xl font-bold ${styles.logo}`}>
                            🤘NASHE🤘
                        </h5>
                        <button className="p-2 hover:bg-neutral-800 rounded-full -m-2" ref={closeSidebarButtonRef}>
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="text-lg select-none w-screen">
                        <Link className="px-6 py-3 hover:bg-neutral-900 hover:text-red-200 w-full flex flex-row items-center justify-between cursor-pointer" href="/" onClick={closeSidebar}>
                            <span>Inicio</span>
                            <HomeIcon className="w-6 h-6" />
                        </Link>
                        <Link className="px-6 py-3 hover:bg-neutral-900 hover:text-red-200 w-full flex flex-row items-center justify-between cursor-pointer" href="propuestas" onClick={closeSidebar}>
                            <span>Propuestas</span>
                            <DocumentCheckIcon className="w-6 h-6" />
                        </Link>
                        <Link className="px-6 py-3 hover:bg-neutral-900 hover:text-red-200 w-full flex flex-row items-center justify-between cursor-pointer" href="jueguitos" onClick={closeSidebar}> 
                            <span>Jueguitos</span>
                            <PuzzlePieceIcon className="w-6 h-6" />                               
                        </Link>
                        <div className="my-3 h-px bg-neutral-800"></div>
                        <Link className="px-6 py-3 hover:bg-neutral-900 hover:text-red-200 w-full flex flex-row items-center justify-between cursor-pointer" href="img/nashe.jpg" onClick={closeSidebar}>
                            <span>Boleta</span>
                            <PhotoIcon className="w-6 h-6" />
                        </Link>
                        <div className="px-6 py-3 hover:bg-neutral-900 hover:text-red-200 w-full flex flex-row items-center justify-between cursor-pointer" href="video/spot-mobile.mp4" onClick={closeSidebar}>
                            <span>Video</span>
                            <VideoCameraIcon className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <span className={`${styles.nameUnderline} ${styles.yellow} whitespace-nowrap`}>Juan Manuel Lupacchini</span> y <span className={`${styles.nameUnderline} ${styles.red} whitespace-nowrap`}>Francisco Javier Grecco Carman</span>
                </div>
            </div>
        </>
    )
}