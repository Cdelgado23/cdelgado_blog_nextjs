import { Paper } from '@mui/material';

import styles from "./styles/DataCard.module.css";


type PropsData = {
    color: String;
    header?: String;
    children: React.ReactNode;
};

export default function DataCard(props: PropsData) {
    return (
        <Paper elevation={3} className={styles.dataCard} style={{ backgroundColor: `${props.color}` }}>
            {props.header != null ?
                <h2 style={{ margin: "0 1rem" }}>
                    {props.header}
                </h2> :
                ""
            }
            <div className={styles.cardContent}>
                {props.children}
            </div>
        </Paper>
    );
}