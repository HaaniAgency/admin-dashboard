import Header from './_components/Header';
import TopCards from './_components/TopCards';
import BarChart from './_components/BarChart';
import RecentOrders from './_components/RecentOrders';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </main>
  );
}
