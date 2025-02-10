import  {Navbar2}  from "@/components/Navbar2";
import About from "@/components/about-hero"
import News from "@/components/newsletter-section"
import Footer from "@/components/footer"
import { Contact } from "lucide-react";
export default function about(){
    return(
        <>
        <Navbar2/>
        <About/>
        <Contact/>
        <News/>
        <Footer/>

        </>
    )
}