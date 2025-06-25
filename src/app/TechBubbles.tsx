import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill} from "react-icons/ri";



export default function TechBubbles() {
  const skills = [
    { name: "React", icon: <FaReact size={36} className="fill-blue-300"/>, color: "text-blue-300 bg-gray-800"},
    { name: "Next.js", icon: <RiNextjsLine size={40}/>, color: "bg-black" },
    { name: "Tailwind", icon: <RiTailwindCssFill size={36} className="fill-green-300"/>, color: "text-green-400 bg-gray-700" },
    { name: "Node.js", icon: <FaNodeJs size={36} className="fill-green-400 "/>, color: "text-green-500 bg-gray-100" },
    

    // { name: "Java", icon: <FaJava size={36}/>, color: "bg-red-500" },
    // { name: "HTML", icon: <FaHtml5 size={36}/>, color: "bg-gray-300" },
    // { name: "CSS", icon: <FaCss3 size={36}/>, color: "bg-blue-300" }
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex justify-center gap-4 flex-wrap p-4">
        {skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger>
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-2xl text-white ${skill.color} transform transition-transform duration-300 hover:scale-110`}
              >
                {skill.icon}
              </div>
            </TooltipTrigger>
            <TooltipContent className="text-sm">
              <TooltipArrow/>
              <p>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
