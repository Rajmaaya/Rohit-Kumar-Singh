// pages/dashboard.js
import { Bar } from 'react-chartjs-2';

export default function Dashboard() {
  // Dry Fruits Data
  const dryFruitsData = {
    labels: ['Almonds', 'Cashews', 'Walnuts', 'Pistachios', 'Dates', 'Raisins'],
    datasets: [
      {
        label: 'Dry Fruits Sales (₹)',
        data: [12000, 8000, 6000, 4000, 3000, 2000], // replace with real data
        backgroundColor: '#a67c52',
      },
    ],
  };

  // Makhana Data
  const makhanaData = {
    labels: ['Premium', 'Flavored'],
    datasets: [
      {
        label: 'Makhana Sales (₹)',
        data: [15000, 10000],
        backgroundColor: '#f5deb3',
      },
    ],
  };

  // Pickles Data
  const picklesData = {
    labels: ['Mango', 'Lemon', 'Mixed'],
    datasets: [
      {
        label: 'Pickles Sales (₹)',
        data: [7000, 5000, 4000],
        backgroundColor: '#ffcc00',
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Rajmaaya Business Dashboard</h1>

      <h2>Dry Fruits</h2>
      <Bar data={dryFruitsData} />

      <h2>Makhana</h2>
      <Bar data={makhanaData} />

      <h2>Pickles</h2>
      <Bar data={picklesData} />
    </div>
  );
}
