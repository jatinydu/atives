import Tab from "../common/Tab";
import { MapPin, Calendar } from "lucide-react";

interface IUser{
    name: string,
    bio: string,
    location: string,
    joinedDate: string,
    followers: number,
    following: number,
    postsCount: number,
    profilePicture: string,
    skills: string[],
    role: string,
}

interface IProfileCardProps {
    user: IUser;
}

export default function ProfileCard(props:IProfileCardProps) {
  return (
    <div className="w-full border-[1px] border-accent-100 p-6 flex lg:flex-row flex-col gap-6 bg-gradient-to-t from-[#dbdbdb4e] via-white/90 to-white rounded-lg">
      <img src={props.user.profilePicture} alt="profile_pic"  className="flex-start h-20 rounded-full border-2 border-accent-100 w-20"/>
      <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">{props.user.name}</h2>
          <p className="text-secondary-400 text-sm">{props.user.role}</p>
          <ul className="flex md:flex-row flex-col gap-3 text-xs font-medium ml-[-7px]">
            <li className="flex items-center"><MapPin className="h-3"/>{props.user.location}</li>
            <li className="flex items-center"><Calendar className="h-3"/>{props.user.joinedDate}</li>
          </ul>
          <ul className="mt-4 flex items-center gap-4">
            <li className="flex flex-col-reverse items-center">
                <span className="font-medium text-[10px]">Followers</span> <span className="font-semibold text-xl">{props.user.followers}</span>
            </li>
            <li className="flex flex-col-reverse items-center">
                <span className="font-medium text-[10px]">Following</span> <span className="font-semibold text-xl">{props.user.following}</span>
            </li>
            <li className="flex flex-col-reverse items-center">
                <span className="font-medium text-[10px]">Posts</span> <span className="font-semibold text-xl">{props.user.postsCount}</span>
            </li>
          </ul>
          <p className="py-3 text-xs">{props.user.bio}</p>
          <ul className="flex items-center gap-1">
            {
                props.user.skills.map((skill, index) => (
                    <Tab key={index} label={skill} className="py-[2px] px-[6px] bg-[#0055ff21] text-primary-600 font-medium"/>
                ))
            }
          </ul>
      </div>
    </div>
  )
}
