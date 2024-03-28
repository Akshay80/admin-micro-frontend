'use client'
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";
import {
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

Chart.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface DoughnutChartProps {
    data?: any,
    width?: any,
    height?: any,
    total?: any
}

const DoughnutChart = (props: DoughnutChartProps) => {
    const chartData: any = {
        labels: props?.data?.labels,
        datasets: [{
            data: props?.data?.dataSet,
            backgroundColor: [
                'rgb(74,195,232)',
                'rgb(242,242,49)',
                'rgb(246,167,0)',
                'rgb(33,135,33)',
                'rgb(247,198,0)',
                'rgb(247,0,0)',
                'rgb(132,8,8)',
            ],
        }],
    };

    const chartOptions: any = {
        maintainAspectRatio: false,
        cutout: '85%',
        plugins: {
            title: { display: false },
            legend: {
                position: 'bottom',
                padding: { top: 100 },
                title: {
                    fontColor: 'black',
                    fontSize: 12,
                },
                labels: {
                    pointStyle: 'circle',
                    usePointStyle: true,
                },
            },
        },
    };

    return (
        <section>
            {chartData?.labels?.length > 0 && (
                <Doughnut data={chartData} options={chartOptions} width={props?.width || 400} height={props?.height || 300} />
            )}
        </section>
    );
};

export default DoughnutChart

