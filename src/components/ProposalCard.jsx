export default function ProposalCard({ title, content, icon, key }) {
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