import HeroCards from "../components/Feed/HeroCards";
import HeroTag from "../components/Feed/HeroTag";
import Button from "../components/lib/Button";
import { ProjectCard } from "../components/lib/Card";
import { feedProjects } from "../data/card";

export default function Feed() {
  return (
    <main className="w-full">
        {/* Hero section */}
        <section className="w-full h-auto">
            <div className="w-full flex flex-col gap-5 items-center-safe justify-center min-h-[90vh] mt-[10vh]">
                <HeroTag/>
                {/* Title & desc */}
                <h1 className="text-5xl font-semibold text-center lg:w-[50%] overflow-hidden">Where Creativity Meets Opportunity</h1>
                <p className="text-secondary-400 lg:w-[40%] md:w-[60%] w-[90%] text-xl text-center">Served more than 50k since 2021. showcase your work, connect with peers, and land your next big client.</p>
                {/* Call to action */}
                <div className="flex gap-3 items-center">
                    <Button variant="primary" size="md" label="Be a Creator"/>
                    <Button variant="secondary" size="md" label="Browse Talent"/>
                </div>
                <HeroCards/>
            </div>
            {/* Posts */}
            <div className="w-full min-h-screen py-4xl">
                <div className="w-full flex-3 overflow-y-auto flex flex-col">
                    <h2 className="inline-block text-xl font-semibold">Explore Inspiring Projects</h2>
                    <p className="text-sm text-secondary-400 font-normal">See what 50,000+ creators are building and designing 💖</p>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 p-4 py-10">
                    {
                        feedProjects.length > 0 && feedProjects.map((post)=>{
                            return <ProjectCard key={post.id} {...post} />
                        })
                    }
                </div>
            </div>
        </section>
    </main>
  )
}