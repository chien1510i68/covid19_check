import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoronaVirus from './Components/pages/CoronaVirus';
import Discoveries from './Components/pages/Discoveries';
import Vaccines from './Components/pages/Vaccines';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Test mongoDB
import { fetchCountry } from './mongoDB';
import { sortBy } from 'lodash';
//
import * as Realm from "realm-web";
import MenuPages from './Components/menu';
//fire base
const firebaseConfig = {
    apiKey: "AIzaSyDF-rqqF_dKefsm0N3v_Cn-DJ9K5yuIw9E",
    authDomain: "covid19-data-news.firebaseapp.com",
    projectId: "covid19-data-news",
    storageBucket: "covid19-data-news.appspot.com",
    messagingSenderId: "1026728649163",
    appId: "1:1026728649163:web:80034e67a090f6dce3964e",
    measurementId: "G-4GX5WVJPTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
    const [apiData, setData] = React.useState([]);
    const [country, setCountry] = React.useState([])
    const [countries, setCountries] = React.useState([]);
    const [test, setTTest] = React.useState([]);
    // World Data API 
    useEffect(() => {
        fetchCountry().then((response) => {
            console.log('DataMongoDB', response);
            const { data } = response;
            const apiData = sortBy(data);
            setData(apiData.data);
        });
    }, []);

    //

    /* useEffect(() => {
        async function loadCountry() {
            const REALM_APP_ID = "data-covid-statistics-beehu"
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            try {
                setTTest("Vietnam")
                const user = await app.logIn(credentials);
                const countries = await user.functions.getHistoricalACountry(test);
                setCountries(countries);
                console.log('test API', test)
                console.log('[TestGetAllCountry12]', countries);
            } catch (err) {
                console.error("Failed to log in", err);
            }
        };
        loadCountry();
    }, []) */

    return (
        <div className="App  bg-[#F1F1F2] ">
            <Router>
                <MenuPages></MenuPages>
                <Routes>
                    <Route exact path='/' element={<Discoveries />} />
                    <Route exact path='/CoronaVirus' element={<CoronaVirus />} />
                    <Route exact path='/Vaccines' element={<Vaccines />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
