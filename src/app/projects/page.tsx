import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Project = {
    title: string;
    description: string;
    link: string;
  };
  
  const projects: Project[] = [
    // { title: 'Project One', description: 'Description for project one', link: '#' },
    // { title: 'Project Two', description: 'Description for project two', link: '#' },
    // { title: 'Project Three', description: 'Description for project three', link: '#' },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="pt-20 px-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="flex bg-dark-navbar w-full justify-center items-center min-h-10 rounded-md">
            Section in progress!
            </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            
          {projects.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <p>{project.description}</p>
              </CardContent>
              <CardFooter>
                {/* <p>Card Footer</p> skills used? */}
              </CardFooter>
            </Card>


            // <div key={project.title} className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl">
            //   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            //   <p className="text-gray-700">{project.description}</p>
            // </div>
          ))}
        </div>
      </section>
    );
  }
  