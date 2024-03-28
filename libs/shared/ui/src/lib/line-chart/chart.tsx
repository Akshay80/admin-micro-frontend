import { Line } from 'react-chartjs-2';
import moment from 'moment';

interface LineChart {
    data?: any,
    total?: any,
}

const groupOrdersByMonth = (data: any[]): Record<string, number> => {
    const groupedData: Record<string, number> = {};
    data?.forEach((order) => {
      const month = moment(order.createdAt).format('MMMM');
      groupedData[month] = (groupedData[month] || 0) + 1;
    });
    return groupedData;
  };

 const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'];

const Linechart = (props: LineChart) => {


    const groupedByMonth = groupOrdersByMonth(props?.data)
    const monthlyData = labels.map((month:any) => groupedByMonth[month] || 0);

    const chartData = {
        labels: labels,
        datasets: [
          {
            label: 'Orders per Month',
            data: monthlyData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    const chartOptions: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    return (
        <>
            <Line data={chartData} options={chartOptions} />
        </>
    )
}

export default Linechart