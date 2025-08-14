import { Heart, MessageCircle } from "lucide-react"
import Tab from "../common/Tab"
import trimText from "../../utils/trimText"

interface IProjectCardProps {
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

//  <img src="https://placehold.co/600x4000" alt="Project Thumbnail" className="w-full h-48 object-cover mb-4" />