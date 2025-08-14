import backery from "../../assets/images/Feed/backery.png";
import painting from "../../assets/images/Feed/painting.png";
import photographer from "../../assets/images/Feed/photographer.jpg";

export default function HeroCards() {
  return (
    <div className="w-full flex justify-center gap-3 flex-wrap py-3">
      <div className="w-[250px] h-[280px] hover:translate-y-[-3px] transition duration-400 relative lg:top-2">
        <img
          src={backery}
          alt="Hero 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[250px] h-[280px] hover:translate-y-[-3px] transition duration-400 relative lg:bottom-2">
        <img
          src={painting}
          alt="Hero 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[250px] h-[280px] hover:translate-y-[-3px] transition duration-400 relative lg:top-2">
        <img
          src={photographer}
          alt="Hero 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
