import { Button } from "./ui/button";
import { FileDown } from "lucide-react"
export function DownloadResumeButton () {
    return (
        <Button className="" size={"sm"} >
            <FileDown/>
        </Button>
    )
}