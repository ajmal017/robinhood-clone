import React, { useState, useEffect } from 'react';
import './css/LineGraph.css';
import {Line} from 'react-chartjs-2';

function LineGraph() {

    const [graphData, setGraphData] = useState([]);


    const createData = () => {
        let data = [];
        let value = 50;
        for(var i = 0; i<366; i++){
            let date = new Date();
            date.setHours(0,0,0,0);
            date.setDate(i);
            value += Math.round((Math.random() < 0.3 ? 1 : 0) * Math.random() * 10);
            data.push({x:date, y:value});
        }
        setGraphData(data);
    }

    useEffect(()=>{
        createData();
    }, [])

    return (
        <div className="linegraph">
            <Line 
                data={{
                    labels: [],
                    datasets: [
                        {
                            label: "Earning",
                            data: graphData,
                            backgroundColor: 'transparent',
                            borderColor: '#5ac53b',
                            borderWidth: 1,
                            pointRadius: 1,
                            pointBorderColor: '#5ac53b',
                            pointBackgroundColor: '#5ac53b',
                            pointHoverBackgroundColor: '#000',
                            pointHoverBorderWidth: 4,
                            pointHoverRadius: 6
                        }
                    ]
                }}
                options= {{
                    legend:{
                        display: false
                    },
                    maintainAspectRatio: false,
                    tooltips: {
                        mode: 'index',
                        intersect: false
                    },
                    scales: {
                        xAxes:[{
                            type: 'time',
                            time: {
                                format: 'MM/DD/YY',
                                tooltipFormat: 'll'
                            },
                            ticks:{
                                display: false
                            },
                            gridLines: {
                                display:false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: false,
                                display: false
                            },
                            gridLines: {
                                display:false
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default LineGraph;
