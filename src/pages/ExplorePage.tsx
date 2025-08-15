import MultiTab from "@/components/Explore/MultiTab"
import { CreatorCard, ProjectCard, ResourceCard } from "@/components/lib/Card";
import { creatorsData, feedProjects, resources } from "@/data/card";
import { useState } from "react"

export default function ExplorePage() {
  const [selectedTab, setSelectedTab] = useState('creators');  
  return (
    <main className="w-full min-h-[90vh] mt-[10vh] z-30">
        <section className="w-full h-auto">
            <div className="w-full flex flex-col gap-5 items-center-safe justify-center min-h-[90vh]">
                {/* Title & desc */}
                <h1 className="text-5xl font-semibold text-center overflow-hidden flex flex-col">Explore & <span className="overflow-hidden text-accent-800">Get Inspired</span></h1>
                <p className="text-secondary-300 lg:w-[40%] md:w-[60%] w-[90%] text-md text-center">Discover amazing creators, inspiring portfolios, and valuable resources to fuel your creativity.</p>
                <div className="lg:w-[75%] md:w-[80%] w-[90%] flex flex-col justify-center mt-2">
                    <MultiTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 py-4xl">
                        {
                            selectedTab === 'creators' ? creatorsData.map((creator,index) => (
                                <CreatorCard key={index} {...creator}/>
                            )) : selectedTab === 'portfolios' ?  feedProjects.map((project, index) => (
                                <ProjectCard key={index} {...project}/>
                            )) :  resources.map((res,index)=>(<ResourceCard key={index} {...res}/>))
                        }
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
