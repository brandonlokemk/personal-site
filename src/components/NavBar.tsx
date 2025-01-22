import Link from 'next/link';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
export default function NavBar({ className }: { className?: string }) {
    return (
        <section className={className}>
            <div className="flex items-center justify-center p-4 bg-secondary-light dark:bg-secondary-dark text-white">
                <ThemeToggleButton className="mr-auto border-hidden bg-secondary-light dark:bg-secondary-dark hover:bg-gray-300 dark:hover:bg-gray-800"/>
                    <nav className="flex space-x-5 md:space-x-20 items-center">
                        <Link href="#intro" className="text-md md:text-lg mx-2 hover:underline align-text-top">Intro</Link>
                        <Link href="#about" className="text-md md:text-lg text-wrap mx-2 hover:underline align-text-top">About Me</Link>
                        <Link href="#projects" className="text-md md:text-lg mx-2 hover:underline align-text-top">Projects</Link>
                    </nav>
                <DownloadResumeButton className="ml-auto"/>
            </div>
        </section>
    )
}