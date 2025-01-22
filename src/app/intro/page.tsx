import Link from 'next/link';

export default function Intro() {
    return (
        <section id="intro" className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-4xl font-bold mb- text-center">Hi, I&apos;m Brandon.<br/>Welcome to My Portfolio</h2>
            <p className="text-lg mb-4 mt-3">Explore my projects and get to know my work.</p>
            <Link href="#about" className="px-6 py-3 bg-gray-500 text-white rounded-lg">Get to know me!</Link>
        </section>
    )
}
