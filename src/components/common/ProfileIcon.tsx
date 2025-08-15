export default function ProfileIcon({onClick}:{onClick:()=>void}) {
  return (
    <div onClick={onClick} className="h-8 w-8 rounded-full text-sm bg-primary-600 flex justify-center items-center text-white cursor-pointer transition duration-300 hover:bg-primary-800 border-2 border-accent-800">
        <img src="https://i.pravatar.cc/300?img=3" alt="AT" className="w-full h-full object-cover"/>
    </div>
  )
}
