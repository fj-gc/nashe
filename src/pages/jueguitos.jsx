import jueguitos from "../constants/jueguitos"
import styles from '../styles/jueguitos.module.css'

export default function Jueguitos() {
    return (
        <>
		    <div class="h-96 w-full bg-black relative overflow-hidden">
		        <video class="h-full w-full object-cover absolute bottom-0 left-0 right-0 h-full scale-125 md:scale-100" nocontrols autoplay muted loop id="hero-video">
		            <source src="video/wr.webm" type="video/mp4"></source>
		        </video>
		        <div class="bg-gradient-to-r from-black/80 via-black/50 to-transparent h-full w-full z-10 absolute top-0 left-0 bottom-0 right-0 flex flex-col items-center justify-center px-8">
		            <div class="w-full max-w-6xl flex flex-row items-center">
		                <div class="flex-1 flex flex-col gap-4">
		                    <h2 class="text-4xl uppercase">En el partido <span class="text-yellow-400">NASHE</span> amamos los <span class="text-red-400">jueguitos</span></h2>
		                    <p>Acá hay cosas divertidas que podes hacer. Si nos votan, vamos a poner jueguitos en todas las páginas del gobierno.</p>
		                </div>
		            </div>
		        </div>
		    </div>
    		<div class="flex flex-col items-center w-full px-8 py-16">
                {jueguitos.map((jueguito, index) => (
                    <Jueguito
                        url={jueguito.url}
                        title={jueguito.title}
                        scrolling={jueguito.scrolling} />
                ))}
                <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 md:gap-16 justify-between mb-8">
                    <div>
                        <h2 className="text-3xl">¿Estas listo/a para ser parte de la historia?</h2>
                        <p className="mt-4">Se parte de este movimiento que va a quedar por siempre en los corazones de todos los argentinos como algo re <u>nashe</u>.</p>
                    </div>
                    <div className="w-full md:w-40">
                        <button className="p-4 rounded-md border-2 border-white transition-all hover:scale-110 bg-white text-black leading-none w-full md:w-40 font-montserrat" onclick="alert('Gracias! Juntos vamos a hacer un pais mejor.')">¡Los voto!</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function Jueguito({ title, url, scrolling }) {
    return (
       
        <div class="w-full max-w-6xl relative flex flex-col gap-24 py-4">
            <div class="flex-1 flex flex-col gap-8">
                <h3 class="uppercase text-2xl title-underline red text-center">{title}</h3>
                <div class={styles.iwrapper}><iframe src={url} scrolling={(scrolling === undefined ? "yes" : (scrolling ? "yes" : "no"))} width="100%"></iframe></div>
            </div>
        </div>
    )
}