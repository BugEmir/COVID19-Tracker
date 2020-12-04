import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import styles from './Aantal.module.css';

// destructering van onze data: voor Aantal
const Aantal = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {

    if(!confirmed) {
        return 'Aan het laden..';
    }


    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.besmettingen)}>
                         <CardContent>
                        <Typography color="primary" gutterBottom>Besmettingen</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator="."      
                            />
                        </Typography>
    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Actieve besmettingen COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.hersteld)}>
                         <CardContent>
                        <Typography color="primary" gutterBottom>Hersteld</Typography>
                        <Typography variant="h5">  <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator="."      
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Aantal hersteld COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.sterfgevallen)}>
                         <CardContent>
                        <Typography color="primary" gutterBottom>Sterfgevallen</Typography>
                        <Typography variant="h5">  <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator="."      
                            /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Aantal sterfgevallen COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Aantal;