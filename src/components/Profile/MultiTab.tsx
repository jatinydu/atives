import { Bookmark, Download, Grid3x3 } from "lucide-react";

const tabOptions=[
    { label: "Posts", value: "posts", icon: <Grid3x3 className="h-4"/>  },
    { label: "Projects", value: "projects", icon: <Bookmark className="h-4"/> },
    { label: "Saved", value: "saved", icon: <Download className="h-4"/> },
]

export default function MultiTab({selectedTab, setSelectedTab}:{ selectedTab:string, setSelectedTab:(value:any)=>void}) {
  return (
    <div className="flex items-center gap-3 transition duration-500 flex-wrap">
        {tabOptions.map((tab) => (
            <button
            key={tab.value}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                selectedTab === tab.value
                ? "bg-accent-800 text-white"
                : "bg-secondary-100 text-secondary-400 hover:bg-secondary-200"
            }`}
            onClick={() => setSelectedTab(tab.value)}
            >
            {tab.icon}
            <span className="text-xs font-semibold">{tab.label}</span>
            </button>
        ))}
    </div>
  )
}
