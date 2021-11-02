
import { informationCardContent } from "../lib/FrontPage";
import DataCard from "../components/DataCard"
import styles from './styles/FrontPageInfoCard.module.css';


type Props = {
    card: informationCardContent;
};
export default function InfoCard({ card }: Props) {
    return (
        <DataCard color="#FFFF" header="Working on...">
            <h3 style={{ margin: "0" }}>{card.card_title}</h3>
            <div className={styles.anchor}>
                <div className={styles.overlayedContent} style={{ display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "center" }}>
                    <img src={card.card_image} className={styles.projectImg} />
                </div>
                <div className={styles.overlay}>
                    <div className={styles.overlayText}>
                        <h2 >{card.card_subtitle}</h2>
                        <p>{card.card_summary}</p>
                    </div>
                </div>
            </div>
        </DataCard>
    );
}