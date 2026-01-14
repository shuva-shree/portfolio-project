import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "@/components/HeroSection"  
import AboutMeSection from "../components/AboutMeSection"
import { SkillsSection } from "../components/SkillsSections"
import ProjectsSection from "../components/ProjectsSection"
import { Contact } from "lucide-react"
import ContactsSection from "../components/ContactsSection"
import { Footer } from "../components/Footer"
export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* Theme Toggle */ }
            <ThemeToggle />
        { /* Background effects */ }
            <StarBackground />
        { /* Navbar */ }
        <NavBar />
        { /* main content */ }
        <main>
            { /* Hero Section */ }
            <HeroSection/>
            <AboutMeSection/>
            { /* About Section */ }
            { /* Skills Section */ }
            <SkillsSection/>
            { /* Projects Section */ }
            <ProjectsSection/>
            { /* Contact Section */ }
            <ContactsSection/>
        </main>
        <Footer/>
        { /* Footer */ }
    </div>
}

export default Home