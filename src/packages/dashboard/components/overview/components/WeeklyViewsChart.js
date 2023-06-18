import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import capitalize from 'lodash/capitalize';
import { LegacyDiv } from '../../../../../components';
import { upperCase } from 'lodash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default (props) => {
  const {
    dataToProcess,
    backgroundColor = 'linear-gradient(195deg, #EC407A 0%, #D81B60 100%)',
    step = 1,
    completeLabel = false,
  } = props;

  const processedLabels = Object.keys(dataToProcess).map((label) =>
    !completeLabel
      ? capitalize(label).charAt(0)
      : upperCase(label).substring(0, 3),
  );

  const data = {
    labels: processedLabels,
    datasets: [
      {
        label: 'Day Views',
        data: Object.values(dataToProcess),
        backgroundColor: '#FFF',
        barPercentage: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#FFF',
          borderDash: [2, 2],
        },
        ticks: {
          color: '#FFF',
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: '#FFF',
          borderDash: [2, 2],
        },
        ticks: {
          stepSize: step,
          color: '#FFF',
        },
      },
    },
  };

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          backgroundImage: backgroundColor,
          height: '200px',
          borderRadius: '12px',
          marginTop: '-48px',
          boxShadow:
            '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
          padding: 10,
        },
      }}
    >
      <Bar data={data} options={options} />
    </LegacyDiv>
  );
};
