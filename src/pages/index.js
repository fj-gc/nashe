import { useEffect, useRef } from 'react'

export default function Home() {

    var heroVideoRef = useRef(null);

    useEffect(() => {
        window.onscroll = (e) => {
            heroVideoRef.current.style.marginBottom = "-" + (window.scrollY / 2) + "px";
        }
    }, [])

    return (
        <>
            <div className="h-96 w-full bg-black relative overflow-hidden">
                <video className="h-full w-full object-cover absolute bottom-0 left-0 right-0 scale-125 md:scale-100" src="video/spot-mobile.mp4" controls={false} autoPlay={true} muted={true} loop={true} ref={heroVideoRef} />
                <div className="bg-gradient-to-r from-black/80 via-black/50 to-transparent h-full w-full z-10 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center px-8">
                    <div className="w-full max-w-6xl flex flex-row items-center">
                        <div className="flex-1 flex flex-col gap-4">
                            <h2 className="text-4xl uppercase">El pais necesita gente <span className="text-yellow-400">copada</span> y <span className="text-red-400">responsable</span></h2>
                            <p>Ahi es cuando entramos nosotros. Actualmente, miles de los problemas actuales pueden ser resueltos si se les presta atencion. Si agarramos la pala y empezamos a laburar, es todo re <u>nashe</u>.</p>
                        </div>
                        <div className="flex-1 hidden md:flex flex-col items-center justify-center">
                            <div className="rounded-full relative h-20 w-20 border-2 border-white hover:border-transparent group transition-all cursor-pointer" onclick="MicroModal.show('video-modal')">
                                <div className="h-full w-full relative border-[12px] border-transparent group-hover:border-white rounded-full transition-all">
                                    <div className="h-full w-full relative bg-white transition-all group-hover:bg-black group-hover:border-black rounded-full flex flex-col items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-black fill-black transition group-hover:fill-white group-hover:stroke-white stroke-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                        </svg>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full px-8 py-16">
                <div className="w-full max-w-6xl relative flex flex-col gap-24">
                    <div className="flex flex-col-reverse md:flex-row items-start gap-8">
                        <div className="flex-1 flex flex-col gap-8">
                            <h3 className="uppercase text-2xl title-underline red">¿Que es lo que estamos diciendo?</h3>
                            <p>Somos los optimistas, los que creen que con laburo y esfuerzo todo es posible. Con el plan correcto, los problemas que todos compartimos tienen solucion. No nos resignamos, sino que seguimos avanzando hacia un futuro mejor.</p>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center text-9xl leading-none w-full pb-10 md:pb-auto md:w-auto">
                            🤘
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-12">
                        <h3 className="uppercase text-2xl title-underline center yellow text-center">¿Quienes somos?</h3>
                        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-0 justify-around w-full">
                            <div className="flex flex-col items-center gap-2 text-center w-40">
                                <div className="h-40 w-40 rounded-full bg-neutral-800 relative">
                                    <img src="img/fran.jpeg" className="h-full w-full rounded-full object-cover" />
                                </div>
                                <div className="font-bebas text-xl mt-4">Francisco Javier Grecco Carman</div>
                                <div className="text-base text-neutral-400">Presidente</div>
                            </div>
                            <div className="flex flex-col items-center gap-4 text-center w-40">
                                <div className="h-40 w-40 rounded-full bg-neutral-800 relative">
                                    <img src="img/juanma.jpeg" className="h-full w-full rounded-full object-cover" />
                                </div>
                                <div className="font-bebas text-xl mt-4">Juan Manuel Lupacchini</div>
                                <div className="text-base text-neutral-400">Vicepresidente</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 md:hidden">
                        <h3 className="uppercase text-2xl title-underline red">Nuestra boleta</h3>
                        <img src="nashe.jpg" />
                    </div>
                    <div className="flex flex-col gap-8 md:hidden">
                        <h3 className="uppercase text-2xl title-underline yellow">Video informativo</h3>
                        <video className="h-full w-full object-cover rounded" src="video/spot-mobile.mp4" controls />
                    </div>
                </div>
                <div className="w-full mt-28 relative pb-10 -mb-10">
                    <div className="absolute top-0 bottom-0 left-0 right-0 -mx-8">
                        <div className="w-60 h-px bg-gradient-to-r block absolute left-0 top-12 sm:top-0 md:top-0 rotate-12 -ml-1 mt-6 from-red-400"></div>
                        <div className="w-60 h-px bg-gradient-to-r block absolute left-0 bottom-12 sm:bottom-0 md:bottom-0 -rotate-45 -ml-9 mb-24 from-yellow-400"></div>
                        <div className="w-60 h-px bg-gradient-to-l block absolute right-0 top-12 sm:top-0 md:top-0 rotate-12 -mr-1 mt-6 from-yellow-400"></div>
                        <div className="w-60 h-px bg-gradient-to-l block absolute right-0 bottom-12 sm:bottom-0 md:bottom-0 rotate-45 -mr-9 mb-24 from-red-400"></div>
                    </div>
                    <div className="flex flex-col items-center gap-4 relative z-10">
                        <h3 className="uppercase text-4xl">¡Queremos contar con <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">vos</span>!</h3>
                        <p>Si opinas igual que nosotros, ¡votanos! Juntos vamos a seguir creciendo.</p>
                        <div className="flex flex-col items-center justify-center gap-4 mt-4 w-full md:w-auto">
                            <button className={`p-4 rounded-md border-2 border-white transition-all hover:scale-110 bg-white text-black leading-none w-full md:w-40 font-montserrat`} onclick="alert('Gracias! Juntos vamos a hacer un pais mejor.')">¡Los voto!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
