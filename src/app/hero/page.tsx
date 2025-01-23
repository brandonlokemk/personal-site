import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-5xl font-bold mb- text-center">Hello, I&apos;m <span className='text-light-accent1 dark:text-dark-accent1'>Brandon</span>.<br/>Welcome to My Portfolio!</h2>
            <p className="text-xl mb-4 mt-3">Explore my projects and get to know my work.</p>
            <Button className='bg-gray-500 hover:bg-gray-400' asChild>
                <Link href="#about" className="px-6 py-3 bg-light-accent2 dark:bg-dark-accent1darker text-white text-lg rounded-lg shadow-lg hover:shadow-xl dark:hover:bg-dark-accent1">More about me</Link>
            </Button>

        </section>
    )
}
