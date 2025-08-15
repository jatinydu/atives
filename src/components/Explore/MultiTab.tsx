import { useState } from "react";
import { BookOpen, Briefcase, Users } from "lucide-react";

const tabOptions=[
    { label: "Creators", value: "creators", icon: <Users className="h-4"/>  },
    { label: "Portfolios", value: "portfolios", icon: <Briefcase className="h-4"/> },
    { label: "Resources", value: "resources", icon: <BookOpen className="h-4"/> },
]

export default function MultiTab({selectedTab, setSelectedTab}:{ selectedTab:string, setSelectedTab:(value:any)=>void}) {
  return (
    <div className="flex items-center gap-3 justify-center transition duration-500 flex-wrap">
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
