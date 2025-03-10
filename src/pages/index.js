import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to the Digital Business Card Platform</h1>
      <p className="mt-4 text-lg">Create and customize your digital business card with ease.</p>
      <Link href="/create">
        <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">Get Started</a>
      </Link>
    </div>
  );
} 