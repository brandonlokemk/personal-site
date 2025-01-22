// File: app/page.tsx (Homepage)
import Intro from './intro/page';
import About from './about/page';
import Projects from './projects/page';
import './globals.css';
import NavBar from '@/components/NavBar';

// Font

export default function Home() {
  return (
    <div className="bg-light-color1 text-light-text dark:bg-dark-color1 dark:text-dark-text">
      <Intro/>
      <div>
        <NavBar className='sticky top-0'/>
        <About/>
        <Projects/>
      </div>
    </div>

  );
}