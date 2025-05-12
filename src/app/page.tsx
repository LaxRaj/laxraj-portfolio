import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-6xl text-gray-900 ballet">Lakshyaraj S. Bhati</h1>
      </main>
    </>
  );
}
