import React from 'react';
import './css/Stats.css';
import StockChart from '../stock.svg';

function StatsRow(props) {

    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;

    return (
        <div className="row">
            <div className="row_header">
                <h1>{props.name}</h1>
                <p>{props.volume && (props.volume + " shares")}</p>
            </div>

            <div className="row_chart">
                <img src={StockChart} height={16} alt="chart"/>
            </div>

            <div className="row_numbers">
                <p className="row_price">${props.price.toFixed(2)}</p>
                <p className={`row_percentage ${Math.sign(percentage) === -1 && "negative_percentage"}`}>{Math.sign(percentage) === 1 && "+"}{Number(percentage).toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default StatsRow;
