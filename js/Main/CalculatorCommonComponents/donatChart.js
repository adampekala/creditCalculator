import React, {useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonatChart = ({amount, interests}) => {

    const capital = amount;
    const interestsAmount = capital * interests;
    const payment = capital + interestsAmount;
    const capitalRate = capital / payment;
    const interestsRate = interestsAmount / payment
    const data = {
        // labels: ['Kapitał', 'Odsetki'],
        datasets: [
            {
                label: 'Wartość',
                data: [capitalRate, interestsRate],
                backgroundColor: [
                    '#0F9BFF',
                    '#9E107F',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 0
            },
        ],
    };
    return (

            <div>
                <Doughnut  data={data} />
            </div>


    )

}

export default DonatChart;
