export default function Tab({label, className}:{label: string, className?:string}) {
  return (
    <button className={`text-[8px] bg-[#0000ff33] rounded-xl cursor-pointer px-3 py-1 ${className}`}>
      {label}
    </button>
  )
}
