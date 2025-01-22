// File: app/page.tsx (Homepage)
import Intro from './intro/page';
import About from './about/page';
import Projects from './projects/page';
import './globals.css';
import NavBar from '@/components/NavBar';

// Font

export default function Home() {
  return (
    <>
      <Intro/>
      <div>
        <NavBar className='sticky top-0'/>
        <About/>
        <Projects/>
      </div>


    </>

  );
}