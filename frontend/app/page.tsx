'use client';

import { useEffect, useState } from 'react';
import { getServices } from '../lib/api';
import MetricsCard from './components/MetricsCards';
import Chart from './components/Chart';

interface Service {
  id: number;
  customerName: string;
  serviceType: string;
  scheduledAt: string;
  price: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export default function Dashboard() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    getServices().then(setServices);
  }, []);

  const totalCompleted = services.filter(s => s.status === 'completed').length;
  const totalCancelled = services.filter(s => s.status === 'cancelled').length;
  const totalEarned = services
    .filter(s => s.status === 'completed')
    .reduce((sum, s) => sum + Number(s.price), 0);

  const chartData = [
    { name: 'Completados', value: totalCompleted },
    { name: 'Pendientes', value: services.filter(s => s.status === 'pending').length },
    { name: 'Cancelados', value: totalCancelled },
  ];

  const COLORS = ['#5782b5', '#9db9db', '#6f9dd4'];

  return (
    <main className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard de Servicios</h1>
        <p className="text-gray-600">Resumen de servicios y métricas</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        <MetricsCard title="Completados" value={totalCompleted} color="text-green-600" />
        <MetricsCard title="Cancelados" value={totalCancelled} color="text-red-600" />
        <MetricsCard title="Total Ganado" value={`$${totalEarned}`} color="text-blue-600" />
      </div>
      <div className="bg-[var(--background)] p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Servicios por Estado</h2>
        <Chart data={chartData} colors={COLORS} />
      </div>
    </main>
  );
}
