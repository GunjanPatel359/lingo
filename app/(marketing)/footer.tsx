import { Button } from "@/components/ui/button"
import Flag from "react-world-flags"

export const Footer = () =>{
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="IN" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    Hindi
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="NP" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    Nepali
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="FR" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="JP" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    Japanish
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="IT" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    Italian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                        <Flag code="ES" className="w-[40px] h-[32px] mr-4 rounded-md"/>
                    SPANISH
                </Button>
            </div>
        </footer>
    )
}