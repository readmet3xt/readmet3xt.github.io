import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const SkillsChart = () => {
  const chartRef = useRef<ChartJS<"bar", number[], string>>(null);

  const skillsData = {
    labels: [
      'Product Design',
      'UX/UI Design', 
      'User Research',
      'Info. Architecture',
      'Interaction Design',
      'Systems Thinking',
      'Data-Informed Design'
    ],
    datasets: [{
      label: 'Proficiency',
      data: [95, 90, 85, 80, 85, 90, 85],
      borderWidth: 1,
    }]
  };

  const getChartColors = () => {
    const style = getComputedStyle(document.documentElement);
    const isDark = !document.body.classList.contains('light');
    
    return {
      backgroundColor: 'rgba(255, 71, 87, 0.6)',
      borderColor: '#ff4757',
      textColor: isDark ? '#a0a0a0' : '#4b5563',
      gridColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
    };
  };

  const updateChartColors = () => {
    if (chartRef.current) {
      const colors = getChartColors();
      const chart = chartRef.current;
      
      chart.data.datasets[0].backgroundColor = colors.backgroundColor;
      chart.data.datasets[0].borderColor = colors.borderColor;
      
      if (chart.options.scales?.x?.ticks) {
        chart.options.scales.x.ticks.color = colors.textColor;
      }
      if (chart.options.scales?.y?.ticks) {
        chart.options.scales.y.ticks.color = colors.textColor;
      }
      if (chart.options.scales?.x?.grid) {
        chart.options.scales.x.grid.color = colors.gridColor;
      }
      if (chart.options.scales?.y?.grid) {
        chart.options.scales.y.grid.color = colors.gridColor;
      }
      
      chart.update();
    }
  };

  useEffect(() => {
    updateChartColors();
    
    // Listen for theme changes
    const observer = new MutationObserver(updateChartColors);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: getChartColors().textColor,
        },
        grid: {
          color: getChartColors().gridColor,
        }
      },
      y: {
        ticks: {
          color: getChartColors().textColor,
        },
        grid: {
          color: getChartColors().gridColor,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.x}% proficiency`;
          }
        }
      }
    }
  };

  return (
    <div className="chart-container p-4 md:p-6 rounded-lg shadow-md">
      <Bar ref={chartRef} data={skillsData} options={options} />
    </div>
  );
};