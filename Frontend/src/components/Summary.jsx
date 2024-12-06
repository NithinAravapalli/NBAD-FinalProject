import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import api from "../lib/api";
import { useEffect, useState } from "react";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Summary = () => {
  const [data, setData] = useState(null); // Start with null instead of an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomColor = (num) => {
    let colors = [];
    for (let i = 0; i < num; i++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }
    return colors;
  };

  const getChartData = async () => {
    try {
      const res = await api.get("/charts/piechart");
      console.log(res.data.pie, "data");

      const labels = res.data.pie.data.map((item) => item.label);
      const datasets = res.data.pie.data.map((item) => item.value);

      const chartData = {
        labels: labels,
        datasets: [
          {
            label: "Pie Chart",
            data: datasets,
            backgroundColor: getRandomColor(datasets.length),
          },
        ],
      };
      setData(chartData); // Set the chart data
      setLoading(false); // Stop loading after data is set
    } catch (error) {
      setError("Failed to load chart data. Please try again later.");
      setLoading(false); // Stop loading even if there is an error
    }
  };

  useEffect(() => {
    getChartData();
  }, []);

  if (loading) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        role="status"
        aria-live="polite"
      >
        <span>Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        role="alert"
        aria-live="assertive"
      >
        <span className="text-red-500">{error}</span>
      </div>
    );
  }

  return (
    <div
      className="w-full h-full"
      style={{ maxWidth: "700px", height: "500px" }}
      aria-labelledby="pie-chart-title"
    >
      <h2 id="pie-chart-title" className="sr-only">
        Pie chart visualizing data distribution
      </h2>
      <Pie data={data} />
      <div className="text-center mt-4">
        <p>
          The pie chart above visualizes the distribution of Generative AI
          innovations based on internet sources.
        </p>
      </div>
    </div>
  );
};

export default Summary;