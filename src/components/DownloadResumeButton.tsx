import { Button } from "./ui/button";
import { FileDown } from "lucide-react"

export function DownloadResumeButton ({ className }: { className?: string }) {
    return (
        <Button className={className} size={"sm"}>
            <FileDown/>
        </Button>
    )
}