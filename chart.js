import { Line } from 'react-chartjs-2';

const PlayerPerformanceChart = ({ stats }) => {
  const data = {
    labels: stats.map(stat => stat.date), // Dates of matches
    datasets: [
      {
        label: 'Runs',
        data: stats.map(stat => stat.runs), // Runs scored in each match
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};
