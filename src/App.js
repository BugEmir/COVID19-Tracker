/*
Author: Emirhan Sarikaya
Project: COVID19 Tracker met ReactJS
*/



import React from 'react';
//import Aantal from './components/Aantal/Aantal';
//import Grafiek from './components/Grafiek/Grafiek';
//import Landen from './components/Landen/Landen';




import { Aantal, Grafiek } from './components';
import { fetchInformatie } from './api';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const informatie = await fetchInformatie();
        this.setState({ data: informatie });
    }

    

    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Aantal data={data}/>
                <Grafiek />
            </div>
        )
    }
}

export default App;
