import proposals from "../constants/proposals"

export default function Propuestas() {
    return (
        <>
            <div className="w-full bg-black relative flex flex-col items-center justify-center px-8 pb-16 pt-12 md:pb-24 md:pt-20">
                <div className="w-full max-w-6xl">
                    <h2 className="text-4xl uppercase">Con propuestas que <span className="text-yellow-400">funcionan</span> el cambio es <span className="text-red-400">posible</span></h2>
                    <p className="text-white mt-4 text-xl">Enterate cuales son nuestras propuestas para que entre todos hagamos de la Argentina un pais mejor.</p>
                </div>
            </div>
            <div className="flex flex-col items-center w-full px-8 pb-16">
                <div className="w-full max-w-6xl relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                    {proposals.map((proposal, index) => (
                        <ProposalItem
                            title={proposal.title}
                            content={proposal.content}
                            icon={proposal.icon}
                            key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

function ProposalItem({ title, content, icon, key }) {
    return (
        <div className="flex flex-row gap-4 p-4 rounded bg-neutral-800 w-full" key={key}>
            {icon}             
            <div className="flex flex-col gap-2">
                <h6 className="text-xl font-bold">{title}</h6>
                <p>{content}</p>
            </div>
        </div>
    )
}