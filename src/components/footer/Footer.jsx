import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className="flex flex-col items-center p-8 cursor-default">
            <div className="w-full max-w-6xl flex flex-row justify-between">
                <div className="hidden md:block text-2xl font-bebas leading-none">🤘NASHE🤘</div>
                <div>
                    <span className={`${styles.nameUnderline} ${styles.yellow} whitespace-nowrap`}>Juan Manuel Lupacchini</span> y <span className={`${styles.nameUnderline} ${styles.red} whitespace-nowrap`}>Francisco Javier Grecco Carman</span>
                </div>
            </div>
        </div>
    )
}