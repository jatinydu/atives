import Button from "@/components/lib/Button"
import { JobCard } from "@/components/lib/Card"
import Dropdown from "@/components/lib/Dropdown"
import { Filter } from "lucide-react"
import { jobs } from "@/data/card"
import { useEffect, useState } from "react"
import { jobTypes, locations, sortOptions } from "@/data/dropdown"

function parseSalary(salary: string) {
    // Match the higher value in salary range (last number)
    const match = salary.match(/([\d,]+)\s*$/);
    if (!match) return 0;
    // Remove commas, convert to number
    return Number(match[1].replace(/,/g, ""));
  }
  
  function sortJobs(jobsArray: typeof jobs, sortOption: string) {
    console.log('Sorting jobs by:', sortOption);
    const sorted = [...jobsArray];
  
    if (sortOption === "Salary (High to Low)") {
      sorted.sort((a, b) => parseSalary(b.salary) - parseSalary(a.salary));
    } else if (sortOption === "Salary (Low to High)") {
      sorted.sort((a, b) => parseSalary(a.salary) - parseSalary(b.salary));
    }
  
    return sorted;
  }

export default function JobPage() {
  const [search, setSearch] = useState({
    jobType: "",
    location: "",
    sortBy: ""
  }); 

  const [newJobs, setNewJobs] = useState(jobs);
  
   const selectHandler=(type:string,value:string)=>{
     console.log({type,value});
     if(type === "job"){
        setSearch((prev)=>({...prev, jobType: value}));
     }  
     if(type === "location"){
        setSearch((prev)=>({...prev, location: value}));
     }
     if(type === "sort"){
        setSearch((prev)=>({...prev, sortBy: value}));
     }
   }

    useEffect(()=>{
        let filteredJobs = jobs;
        console.log('inside jobType filter', search); 
        if (search.jobType) { 
        filteredJobs = filteredJobs.filter(job => {
            console.log({
                jobType: job.type.toLowerCase(),
                searchJobType: search.jobType.toLowerCase()
            })
            return job.type.toLowerCase() === search.jobType.toLowerCase()
        });
        console.log(filteredJobs);
        }

        if (search.location) {
        filteredJobs = filteredJobs.filter(job => job.location.toLowerCase() === search.location.toLowerCase());
        }

        if (search.sortBy) {
          filteredJobs = sortJobs(filteredJobs, search.sortBy);
        }
        setNewJobs(filteredJobs);
    },[search])

  return (
    <main className="w-full min-h-[90vh] mt-[10vh] z-30">
        {/* Hero section */}
        <section className="w-full h-auto">
            <div className="w-full flex flex-col gap-5 items-center-safe justify-center min-h-[90vh]">
                {/* Title & desc */}
                <h1 className="text-5xl font-semibold text-center overflow-hidden flex flex-col">Find Your Next <span className="overflow-hidden text-accent-800">Creative Opportunity</span></h1>
                <p className="text-secondary-300 lg:w-[40%] md:w-[60%] w-[90%] text-md text-center">Discover exciting job opportunities from top companies looking for talented creatives.</p>
                <div className="lg:w-[60%] md:w-[75%] w-[90%] flex flex-col justify-center mt-2">
                    {/* filter */}
                    <div className="px-3 flex justify-center flex-col w-full">
                        <p className="flex items-center gap-1 ml-13">
                            <Filter className="h-4"/>
                            <span className="text-sm">Filters</span>
                        </p>
                        <div className="py-3 px-1 flex items-center justify-center flex-wrap gap-4 w-full">
                            <Dropdown options={jobTypes} placeholder="Job Type" type="job" onSelect={selectHandler}/>
                            <Dropdown options={locations} placeholder="Location" type="location" onSelect={selectHandler}/>
                            <Dropdown options={sortOptions} placeholder="Sort By" type="sort" onSelect={selectHandler}/>
                            <Button onClick={()=>{ setNewJobs(jobs); setSearch({jobType: "", location: "", sortBy: "" })}} variant="secondary" className="px-lg" label="Clear"/>
                        </div>
                        {/* cards */}
                        <div className="w-full grid lg:grid-cols-2 grid-cols-1 py-5 lg:px-10 px-2 gap-5 gap-y-8">
                            {
                                newJobs.length > 0 && newJobs.map((job)=>{
                                    return <JobCard key={job.id} {...job}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}