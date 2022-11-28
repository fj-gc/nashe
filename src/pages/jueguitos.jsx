import { useState } from "react";

import { XMarkIcon, ArrowsPointingOutIcon, ArrowsPointingInIcon } from "@heroicons/react/24/outline";

import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image"

import juegos from "../constants/jueguitos"

export default function Jueguitos() {
    var [selectedGame, setSelectedGame] = useState(null);
    var [fullScreen, setFullScreen] = useState(false);

    return (
        <>
            <div className="flex flex-col px-8 pb-16 pt-12 gap-24 items-center">
                <div className="w-full max-w-6xl flex flex-row items-center gap-16">
                    <div className="flex flex-col gap-4 flex-1">
                        <h1 className="text-4xl uppercase">Nosotros <span className="text-red-400">amamos</span> los jueguitos</h1>
                        <p className="text-xl">Es por eso que vamos a poner jueguitos en todas las paginas del gobierno, para que no te aburras cuando haces tus tramites. Re <u>nashe</u>.</p>
                    </div>
                    <div className="flex-1 relative hidden md:flex flex-col items-center justify-center">
                        <div className="rounded-full p-10 bg-green-400/50">
                            <div className="rounded-full p-10 bg-green-400/50">
                                <div className="rounded-full p-10 bg-green-400">
                                    <div className="relative h-32 w-32">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="stroke-white fill-white">
                                            <path d="M15.5,6H13V4a1,1,0,0,0-2,0V6H8.5a7.5,7.5,0,0,0,0,15h7a7.5,7.5,0,0,0,0-15Zm0,13h-7a5.5,5.5,0,0,1,0-11h7a5.5,5.5,0,0,1,0,11Z" />
                                            <path d="M10,12.5H9v-1a1,1,0,0,0-2,0v1H6a1,1,0,0,0,0,2H7v1a1,1,0,0,0,2,0v-1h1a1,1,0,0,0,0-2Z" />
                                            <circle cx="18" cy="12" r="1" />
                                            <circle cx="16" cy="15" r="1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-16 w-full max-w-6xl">
                    <div className="block">
                        <h2 className="text-2xl relative after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-1 after:bg-red-400">Juga tranquilo/a</h2>
                        <p className="mt-4">Te ofrecemos estos juegos completamente <span className="text-yellow-400">gratis</span>.</p>
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                        {juegos.map((game, index) => {
                            return (
                                <div 
                                    className="rounded-md bg-neutral-800 transition cursor-pointer hover:ring-4 hover:ring-offset-4 ring-offset-black odd:hover:ring-red-400 even:hover:ring-yellow-400 w-full overflow-hidden flex flex-row" 
                                    key={index}
                                    onClick={() => {
                                        setSelectedGame({
                                            url: game.url,
                                            title: game.title,
                                            description: game.description,
                                            thumbnailUrl: game.thumbnailUrl
                                        })
                                    }}
                                >
                                    <div className="h-28 w-28 relative">
                                        <Image className="object-cover" src={game.thumbnailUrl} fill={true} />
                                    </div>
                                    <div className="flex-1 p-4 flex flex-col gap-2">
                                        <h3 className="text-xl">{game.title}</h3>
                                        <p className="text-sm">{game.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {selectedGame != null && (
                    <motion.div
                        className="bg-black/50 fixed top-0 bottom-0 left-0 right-0 z-[50] flex flex-col items-center justify-center backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.2
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.2
                            }
                        }}>
                        <div className="absolute top-4 right-4 flex flex-row items-center gap-2 rounded-md bg-black px-2 border border-neutral-800 z-[60]">
                            <button
                                className="rounded-full p-3 cursor-pointer hover:bg-neutral-800" 
                                onClick={() => setFullScreen(!fullScreen)}
                            >
                                {fullScreen ? (
                                    <ArrowsPointingInIcon className="h-6 w-6 text-white" />
                                ) : (
                                    <ArrowsPointingOutIcon className="h-6 w-6 text-white" />
                                )}
                            </button>
                            <button
                                className="rounded-full p-3 cursor-pointer hover:bg-neutral-800" 
                                onClick={() => {
                                    setSelectedGame(null);
                                    setFullScreen(false);
                                }}
                            >
                                <XMarkIcon className="h-6 w-6 text-white" />
                            </button>
                        </div>
                        <motion.div
                            className={"bg-black relative" + (!fullScreen ? " aspect-video w-[40rem] !max-w-screen rounded-md" : " h-screen w-screen")}
                            initial={{
                                y: 10,
                            }}
                            animate={{
                                y: 0,
                                transition: {
                                    duration: 0.2
                                }
                            }}
                            exit={{
                                y: 10,
                                transition: {
                                    duration: 0.2
                                }
                            }}>
                            <iframe src={selectedGame.url} className="rounded-md h-full w-full" frameBorder={0} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}