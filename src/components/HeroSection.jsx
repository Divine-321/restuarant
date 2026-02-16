import { APP_STORE_URL, PLAY_STORE_URL, VIDEO_URL } from "./utils/app.constants";

const HeroSection = () => {
    return (
        <div className="w-screen h-screen relative overflow-hidden">
            <video src={VIDEO_URL} autoPlay loop playsInline muted/>

            <div className="z-10 absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent">
            <div className="flex flex-col items-center justify-center h-full pt-80">
                <img src="/assets/zomato.png" alt="zomato-icon" className="w-52" />
                <div className="mb-5 px-5 text-center font-semibold text-5xl text-white mt-8">India's #1 <br /> food delivery app</div>
                <span className="text-white text-2xl px-5 text-center font-medium">Experience fast & easy online ordering <br /> on the zomato app</span>

                <div className="flex flex-col gap-2 mt-4">
                    <img src={PLAY_STORE_URL} className="w-44" />
                    <img src={APP_STORE_URL} className="w-44" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default HeroSection;