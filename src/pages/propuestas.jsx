import Head from "next/head"

import proposals from "../constants/proposals"
import ProposalCard from "../components/ProposalCard"

export default function Propuestas() {
    return (
        <>
            <Head>
                <title>Propuestas - 🤘NASHE🤘</title>
            </Head>
            <div className="w-full bg-black relative flex flex-col items-center justify-center px-8 pb-16 pt-12 md:pb-24 md:pt-20">
                <div className="w-full max-w-6xl">
                    <h2 className="text-4xl uppercase">Con propuestas que <span className="text-yellow-400">funcionan</span> el cambio es <span className="text-red-400">posible</span></h2>
                    <p className="text-white mt-4 text-xl">Enterate cuáles son nuestras propuestas para que entre todos hagamos de la Argentina un pais re <u>nashe</u>.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-32 w-full px-8 pb-16">
                <div className="w-full max-w-6xl relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                    {proposals.map((proposal, index) => (
                        <ProposalCard
                            title={proposal.title}
                            content={proposal.content}
                            icon={proposal.icon}
                            key={index} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-8 md:gap-16 justify-between mb-8">
                    <div>
                        <h2 className="text-3xl">¿Estas listo/a para ser parte de la historia?</h2>
                        <p className="mt-4">Se parte de este movimiento que va a quedar por siempre en los corazones de todos los argentinos como algo re <u>nashe</u>.</p>
                    </div>
                    <div className="w-full md:w-40">
                        <button className="p-4 rounded-md border-2 border-white transition-all hover:scale-110 bg-white text-black leading-none w-full md:w-40 font-montserrat" onClick={() => {alert('Gracias! Juntos vamos a hacer un pais mejor.')}}>¡Los voto!</button>
                    </div>
                </div>
            </div>
        </>
    )
}