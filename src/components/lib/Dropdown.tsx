import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Dropdown({placeholder,type="",onSelect,options}: {placeholder?: string, onSelect: (type:string,value: string) => void, type?:string, options?: string[]}) {
  return (
        <Select onValueChange={(value:string)=>{ onSelect(type,value) }}>
            <SelectTrigger className="w-[200px] overflow-hidden border-2">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="py-2 z-50 h-auto bg-white border-0">
                    <SelectItem value="select" disabled>
                        {placeholder}
                    </SelectItem>
                {
                    options && options.map((option, index) => (
                        <SelectItem key={index} value={option}>
                            {option}
                        </SelectItem>
                    ))
                }
            </SelectContent>
    </Select>
  )
}
