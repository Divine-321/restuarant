import { APP_STORE_URL, PLAY_STORE_URL, VIDEO_URL } from "./utils/app.constants";

const HeroSection = () => {
    return (
        <div className="w-screen h-screen relative">
            <video className="absolute inset-0 w-full h-full object-cover -z-10" src={VIDEO_URL} autoPlay loop muted />

            <div className="z-10 absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent">
            <div className="flex flex-col items-center justify-center h-full pt-80">
                <img src="/assets/zomato.png" alt="zomato-icon" className="w-52" />
                <div className="mb-5 px-5 text-center font-semibold text-5xl text-white mt-8">India's #1 <br /> food delivery app</div>
                <span className="text-white text-2xl px-5 text-center font-medium">Experience fast & easy online ordering <br /> on the zomato app</span>

                <div className="flex gap-2 mt-10">
                    <img src={PLAY_STORE_URL} className="w-44" />
                    <img src={APP_STORE_URL} className="w-44" />
                </div>

                <div className="flex items-center justify-center gap-2 mt-20 animate-bounce">
                    <span className="text-white font-medium">Scroll down</span>
                    <img src="/assets/double-arrow.svg" alt="double-arrow-icon" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;