export default function Tab({label}:{label: string}) {
  return (
    <button className='text-[8px] bg-[#0000ff33] rounded-xl cursor-pointer px-3 py-1'>
      {label}
    </button>
  )
}
