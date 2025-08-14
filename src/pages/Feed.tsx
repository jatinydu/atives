import HeroCards from "../components/Feed/HeroCards";
import HeroTag from "../components/Feed/HeroTag";
import Button from "../components/lib/Button";

export default function Feed() {
  return (
    <main className="w-full">
        {/* Hero section */}
        <section className="w-full h-auto overflow-y-hidden">
            <div className="w-full flex flex-col gap-5 items-center-safe justify-center min-h-[90vh]">
                <HeroTag/>
                {/* Title & desc */}
                <h1 className="text-5xl font-semibold text-center lg:w-[50%]">Where Creativity Meets Opportunity</h1>
                <p className="text-secondary-400 lg:w-[40%] md:w-[60%] w-[90%] text-xl text-center">Served more than 50k since 2021. showcase your work, connect with peers, and land your next big client.</p>
                {/* Call to action */}
                <div className="flex gap-3 items-center">
                    <Button variant="primary" size="md" label="Be a Creator"/>
                    <Button variant="secondary" size="md" label="Browse Talent"/>
                </div>
                <HeroCards/>
            </div>
            {/* Posts */}
            <div className="w-full">
                <div className="overflow-hidden">
                    <h2>Explore Inspiring Projects</h2>
                    <p>See what 50,000+ creators are building and designing.</p>
                </div>
            </div>
        </section>
    </main>
  )
}