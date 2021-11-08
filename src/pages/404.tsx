// 404.tsx

import React from 'react';
import Head from 'next/head';
import {Box, Link, Typography} from "@mui/material";

import styles from '../components/styles/404.module.css'
import {SocialList} from "../components/SocialList";

export default function FourOhFour() {
    return (
        <Box className={styles.root}>
            <div className={styles.container}>
                <Head>
                    <title>Something went wrong 😢</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                </Head>
                <Typography  variant="h3" component="h3">
                    Oops, I could not find what you are looking for 😢
                </Typography>
                <Typography  variant="h5">
                    If you think there is something wrong with it, please, let me know about it.
                </Typography>
                <Typography  variant="h6">
                    <Link href="/">
                        <a >Return to Home Page</a>
                    </Link>
                </Typography>
                <div style={{width:"50%"}}>
                    <SocialList/>
                </div>
            </div>
        </Box>
    )
}
