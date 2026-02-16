import { VIDEO_URL } from "./utils/app.constants";

const HeroSection = () => {
    return (
        <div className="w-screen h-screen relative">
            <video src={VIDEO_URL} autoPlay loop playsInline/>
        </div>
    );
};

export default HeroSection;