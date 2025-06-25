import Link from 'next/link';
import { DownloadResumeButton } from '@/components/DownloadResumeButton';
import { ThemeToggleButton } from '@/components/ThemeToggleButton';
export default function NavBar({ className }: { className?: string }) {
    return (
        <section className={className}>
            <div className="flex items-center justify-center p-4 dark:bg-opacity-60 backdrop-blur-lg bg-light-navbar dark:bg-dark-navbar dark:text-white">
                <ThemeToggleButton className="mr-auto border-hidden bg-light-navbar dark:bg-dark-navbar hover:bg-gray-300 dark:hover:bg-gray-800"/>
                    <nav className="flex space-x-5 md:space-x-20 items-center">
                        <Link href="#hero" className="text-md md:text-lg font-bold mx-2 hover:text-light-accent1 dark:hover:text-dark-accent1 align-text-top">Home</Link>
                        <Link href="#about" className="text-md md:text-lg font-bold text-wrap mx-2 hover:text-light-accent1 dark:hover:text-dark-accent1 align-text-top">About Me</Link>
                        <Link href="#projects" className="text-md md:text-lg font-bold mx-2 hover:text-light-accent1 dark:hover:text-dark-accent1 align-text-top">Projects</Link>
                    </nav>
                <DownloadResumeButton className="ml-auto"/>
            </div>
        </section>
    )
}