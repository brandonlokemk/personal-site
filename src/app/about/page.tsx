export default function About() {
    return (
      <section id="about" className="min-h-screen pt-20 px-8 flex flex-col items-center" >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-4">Hi! I&apos;m Brandon, a Software Engineer with a specialisation in Software Development and Artificial Intelligence.</p>
        <h3 className="text-2xl font-bold mb-4">Skills</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4">Certifications</h3>
        <ul className="list-disc list-inside">
          <li>Certification 1</li>
          <li>Certification 2</li>
          <li>Certification 3</li>
        </ul>
      </section>
    );
  }
  