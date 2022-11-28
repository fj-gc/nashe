import Link from "next/link"

export default function Error404() {
    return (
        <div className="flex flex-col items-center px-8 py-16 md:py-24">
            <div className="relative w-full max-w-6xl flex flex-col md:items-center gap-4">
                <h1 className="text-red-400 text-8xl">404</h1>
                <div className="text-xl md:text-center">
                    ¡Uy! No pudimos encontrar eso que estabas buscando. Lo que si encontramos fue un mensaje oculto, en lo mas desierto del desierto que decia <span className={`underline decoration-yellow-400`}>"El partido nashe es el mejor, votenlos"</span>. Al principio no estabamos muy seguros, pero finalmente acordamos que si lo decian los faraones, debe ser verdad.
                </div>
                <Link href="/">
                    <button className="mt-4 p-4 text-black font-montserrat bg-white rounded-md transition-transform hover:scale-110 w-full md:w-40">Ir al inicio</button>
                </Link>
            </div>
        </div>
    )
}