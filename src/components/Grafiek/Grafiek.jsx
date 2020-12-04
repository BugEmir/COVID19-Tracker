import React, { useState, useEffect } from 'react';
import { fetchDagelijkseInfo } from '../../api';
import { Bar, Line } from 'react-chartjs-2'; 

import styles from './Grafiek.module.css';

const Grafiek = () => {
    const [dagelijkseInfo, zetDagelijkseInfo] = useState({});
    useEffect(() => {
        const fetchAPI = async () => {
            zetDagelijkseInfo(await fetchDagelijkseInfo());
        }   
           
            fetchAPI();
    });


        // kanker API eigenlijk
    const staafGrafiek = (
        dagelijkseInfo.length
        ? (
        <Line 
        data={{
          labels: dagelijkseInfo.map(({ date }) => date),
          datasets: [{
            data: dagelijkseInfo.map(({ confirmed }) => confirmed),
            label: 'Besmettingen',
            borderColor: '#212121',
            backgroundColor: 'grey',
            fill: true,
          }, {
            data: dagelijkseInfo.map(({ deaths }) => deaths),
            label: 'Besmettingen',
            borderColor: 'red',
            fill: true,
          }],  
        }}
        />) : null
    );

    return (
        <div className={styles.container}>
            {staafGrafiek}

        </div>
    )
}

export default Grafiek;