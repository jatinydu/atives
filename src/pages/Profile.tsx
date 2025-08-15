import MultiTab from "@/components/Profile/MultiTab";
import ProfileCard from "@/components/Profile/ProfileCard";
import { ProjectCard } from "@/components/lib/Card";
import { feedProjects } from "@/data/card";
import { useRef, useState } from "react";
import type { IProjectCardProps } from "@/components/lib/Card";
import { Star } from "lucide-react";

export default function Profile() { 
  const user = useRef({
    name: "Ava Thompson",
    bio: "UI/UX Designer with a passion for creating intuitive user experiences. 5+ years in digital design.",
    location: "San Francisco",
    joinedDate: "Jan 2025",
    followers: 1247,
    following: 892,
    postsCount: 2,
    profilePicture: "https://i.pravatar.cc/300?img=3",
    skills: ["UI Design", "Figma", "Prototyping"],
    role: "UI/UX Designer",
  });

  const [selectedTab, setSelectedTab] = useState('posts');
//   const [projects, setProjects] = useState(feedProjects);
  const [saved, setSaved] = useState<IProjectCardProps[]>([]);

  console.log("User Data:", user.current);

  return (
    <main className="w-full min-h-[90vh] mt-[10vh] z-30">
        <section className="w-full h-auto">
            {/* Header */}
            <ProfileCard user={user.current}/>
            <div className="w-full py-10">
             <MultiTab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 py-4xl">
                        {
                            selectedTab === 'posts' && feedProjects.length>0 ? feedProjects.filter((project)=>{ return project.name === user.current.name }).map((project, index)=>{
                                return <ProjectCard key={index} {...project} />
                            }) : selectedTab === 'saved' && saved.length>0 ?  saved.filter((project)=>{ return project.name === user.current.name }).map((project, index)=>{
                                return <ProjectCard key={index} {...project} />
                            }) : selectedTab === 'projects' && feedProjects.length>0 ? feedProjects.filter((project)=>{ return project.name === user.current.name }).map((project, index)=>{
                                return <ProjectCard key={index} {...project} />
                            }) : 
                            <div className="w-[90vw] flex flex-col justify-center items-center">
                                <div className="py-3 px-3 bg-primary-100 rounded-full"><Star className="h-5 text-secondary-400"/></div>
                                <h3 className="text-secondary-400 text-lg font-semibold">No {selectedTab} found</h3>
                                <p className="text-secondary-500 text-xs">Explore more projects and save them to see them here.</p>
                            </div>
                        }
                    </div>
            </div>
        </section>
    </main>
  )
}
