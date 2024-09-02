import Navbar from "./Navbar"


const Hero1 = () => {
    return (
        <div className="h-screen bg-gradient-to-t from-[#141521] to-[#141521]">
            <section className="bg-hero-pattern1 bg-no-repeat bg-cover h-screen">
                <Navbar />
                <div className="flex items-center relative ">
                    <div class="relative items-center w-full px-5 pt-12 mx-auto max-w-7xl lg:px-16 lg:pt-36 md:px-12">
                        <div class="mx-auto text-center">
                            <div>
                                <p class="text-4xl font-extrabold tracking-tight text-black md:text-6xl md:text-white">
                                    A set of 28 dark & light
                                    <span class="md:block">mesh gradients in 5k res</span>
                                </p>
                                <p class="max-w-2xl mx-auto mt-8 text-base text-black lg:text-white lg:text-xl">
                                    use on your design projects, as backgrounds, wallpapers,
                                    presentations,.. and anywhere you can think of
                                </p>
                            </div>
                            <div class="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                                <a class="items-center text-white focus:outline-none inline-flex justify-center hover:text-white bg-[#151623] duration-200 focus-visible:outline-black focus-visible:ring-black font-medium hover:bg-[#151623]/20 md:w-auto px-6 py-3 rounded-xl text-center w-full" href="https://unwrapped.design/diagonal/">Buy for $3</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>

    )
}

export default Hero1
