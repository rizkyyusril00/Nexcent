
import SliderHero from "./slider";


export default function Hero() {

    return(
        <>
            <section id="home">
                <div className="hero">
                    <div className="mx-auto relative overflow-hidden">
                        <SliderHero />
                    </div>
                </div>
                <div id="features" className="flex invisible mb-0 md:mb-12">s</div>
            </section>
        </>
    )
}