import { Heart, MessageCircle, ExternalLink } from "lucide-react"
import Tab from "../common/Tab"
import trimText from "../../utils/trimText"
import Button from "./Button"

export interface IProjectCardProps {
    id?:string,
    title:string,
    desc:string,
    created_at:string,
    img:string,
    likeCount?:number,
    commentCount?:number,
    category:string,
    name:string,
    position:string,
    profile_pic:string
}

export interface IJobsCardProps {
    id: string,
    title: string,
    company: string,
    description: string,
    skills: string[],
    location: string,
    posted: string,
    salary: string,
    type?: string,
}

export interface ICreatorProps{
    name: string,
    role: string,
    tags: string[],
    img: string,
    followers: number,
    following: number
}

export interface IResourceProps{
    title:string,
    desc:string,
    img:string
}

export const ProjectCard=({title,profile_pic,name,position,desc,created_at,img,category,likeCount,commentCount}:IProjectCardProps)=> {
  return (
    <div className="shadow-lg rounded-xl transition duration-500 hover:scale-105">
        <img src={img} alt="Project Thumbnail" className="w-full h-50 object-cover" />
        <div className="w-full flex flex-col gap-2 p-6">
            {/* haeder */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img src={profile_pic} alt="profile_pic" className="w-7 rounded-full"/>
                    <ul>
                        <li className="text-xs font-semibold">{name}</li>
                        <li className="text-[10px] text-secondary-400">{position}</li>
                    </ul>
                </div>
                <span className="text-xs">{created_at}</span>
            </div>
            {/* Text & Desc */}
            <h3 className="mt-2 text-sm">{title}</h3>
            <p className="my-2 text-xs">{trimText(desc,80)}</p>
            {/* Actions */}
            <div className="flex items-center justify-between">
                <Tab label={category}/>
                <ul className="flex items-center gap-2">
                    <li className="flex items-center gap-1 text-secondary-400 text-[8px] cursor-pointer">
                        <Heart className="w-3 h-3"/> {likeCount} Likes
                    </li>
                    <li className="flex items-center gap-1 text-secondary-400 text-[8px] cursor-pointer">
                        <MessageCircle className="w-3 h-3"/> {commentCount} Comments
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export const JobCard=({title,company,type="remote",description,skills,salary,posted,location}:IJobsCardProps)=>{
    return (
        <div className="flex flex-col gap-1 shadow-lg p-4 rounded-xl transition duration-500 hover:shadow-xl cursor-pointer">
            <ul className="flex items-center justify-between flex-wrap">
                <h3>{title}</h3>
                <span className="text-[10px] text-accent-800 bg-[#0000ff2c] px-2 rounded-2xl">{type}</span>
            </ul>
            <ul className="flex flex-col gap-2">
                <li className="text-secondary-400 text-xs">{company}</li>
                <li className="text-xs">{trimText(description,80)}</li>
                <li className="text-sm flex gap-2 items-center py-1">
                    {
                        skills.map((skill, index) => (
                            <Tab key={index} className="bg-accent-100" label={skill}/>
                        ))
                    }
                </li>
                <li className="text-xs">🗺️ {location}</li>
                <li className="text-xs">⏲️ {posted}</li>
                <li className="text-xs">💵 Salary: {salary}</li>
                <Button className="w-full flex justify-center items-center mt-sm" variant="primary" size="md" label="Apply Now"/>
            </ul>
        </div>
    )
}

export const CreatorCard=({name,role,tags,img,followers,following}:ICreatorProps)=>{
    return (
        <div className="min-w-[250px] flex flex-col gap-2 p-4 items-center shadow-lg rounded-lg transition duration-500 hover:shadow-xl cursor-pointer">
            <img src={img} alt="Proifle" className="h-15 w-15 rounded-full bg-accent-700"/>
            <ul className="text-center">
                <p className="text-sm">{name}</p>
                <span className="text-[10px] text-secondary-300">{role}</span>
            </ul>
            <ul className="flex items-center text-[10px] gap-2 text-secondary-300">
                <span>{followers} followers</span>
                <div className="w-1 h-1 bg-secondary-400 rounded-full"></div>
                <span>{following} following</span>
            </ul>
            <ul className="flex items-center gap-2 text-secondary-700 mt-1">
                {
                    tags.map((tag, index) => (
                        <Tab key={index} className="bg-secondary-100" label={tag}/>
                    ))
                }
            </ul>
            <Button label="Follow" variant="primary" size="sm" className="w-full flex justify-center items-center mt-3 font-medium"/>
        </div>
    )
}


export const ResourceCard=({title,desc,img}:IResourceProps)=>{
    return (
        <div className="flex flex-col shadow-lg rounded-lg transition duration-500 hover:shadow-2xl cursor-pointer">
            <img src={img} alt="resource" />
            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xs font-semibold">{title}</h3>
                <p className="text-[10px] text-secondary-400">{desc}</p>
                <Button startIcon={<ExternalLink className="h-3"/>} label="View Resource" variant="secondary" size="sm" className="w-full flex justify-center items-center mt-3 font-medium border-[1px] text-[9px] hover:border-accent-800 gap-0"/>
            </div>
        </div>
    )
}