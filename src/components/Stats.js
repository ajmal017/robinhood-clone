/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import './css/Stats.css';
import axios from 'axios';
import StatsRow from './StatsRow';
import {db} from '../firebase';

// const KEY = process.env.FINNHUB_API_KEY;
const KEY = 'bv25buv48v6o5ed6t540';

const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${KEY}`;

function Stats() {

    const [stockData, setStockData] = useState([]);
    const [userStocks, setUserStocks] = useState([]);

    const getStockData = async (stock) => {
        try {
            return axios
                .get(`${BASE_URL}${stock}${KEY_URL}`);
        } catch (error) {
            console.log("Error", error.message);
        }
    };

    const getUserStocks = async () =>{
        db.collection('userStocks').onSnapshot(snapshot => {
            console.log(snapshot.docs);
            let promises = [];
            let userStockData = [];

            snapshot.docs.map((doc) => {
                console.log(doc.data);
                promises.push(getStockData(doc.data().ticker).then(
                    res => {
                        userStockData.push({
                            id: doc.id,
                            data: doc.data(),
                            info: res.data
                        })
                    })
                )
            })
            Promise.all(promises).then(()=>{
                console.log(userStockData);
                setUserStocks(userStockData);
            })
        })
    }

    useEffect(()=>{
        getUserStocks();

        const stocksList = ["AAPL", "MSFT", "TSLA", "GOOG", "FB", "DIS"];


        let stocksData = [];
        let promises = [];

        // eslint-disable-next-line array-callback-return
        stocksList.map((stock) => {
            promises.push(
                getStockData(stock)
                .then((res)=>{
                    // console.log(res);
                    stocksData.push({
                    name: stock,
                    ...res.data
                });
            })
            )
        });

        Promise.all(promises).then(()=>{
            // console.log(stocksData);
            setStockData(stocksData);
        })

    }, [])

    return (
        <div className="stats">
            <div className="stats_container">

                <div className="stats_header">
                    <p>Stocks</p>
                </div>

                <div className="stats_content">
                    <div className="stats_rows">

                    {userStocks.map((stock)=>(
                            <StatsRow
                                key={stock.data.ticker}
                                name={stock.data.ticker}
                                openPrice={stock.info.o}
                                volume={stock.data.shares}
                                price={stock.info.c}
                            />
                        ))}
                        
                    </div>
                </div>

                <div className="stats_header">
                    <p>Watchlist</p>
                </div>

                <div className="stats_content">
                    <div className="stats_rows">
                    {stockData.map((stock)=>(
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            />
                        ))}
                    </div>
                </div>

                <div className="stats_header">
                    <p>For You</p>
                </div>

                <div className="stats_content">
                    <div className="stats_rows">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Stats;
