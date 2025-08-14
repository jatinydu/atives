import { Sparkles } from "lucide-react";

export default function HeroTag() {
  return (
    <div className="flex items-center gap-1 border-2 border-secondary-100 px-3 py-1 rounded-3xl text-accent-700">
       <Sparkles size={13} color="gold"/>
       <h3 className="text-sm">Discover Premium Creative Work</h3>
    </div>
  )
}
