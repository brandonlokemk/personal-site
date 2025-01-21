// File: app/page.tsx (Homepage)
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-76px)]">
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-lg mb-4">Explore my projects and get to know my work.</p>
      <Link href="/projects" className="px-6 py-3 bg-gray-500 text-white rounded-lg">View Projects</Link>
    </section>
  );
}