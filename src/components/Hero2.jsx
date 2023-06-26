
const Hero2 = () => {
    return (
        <div className="h-screen">
            <section className="flex items-center relative bg-hero-pattern2 bg-no-repeat bg-cover h-screen">
                <div className="relative items-center w-full gap-12 p-8 mx-auto lg:inline-flex lg:p-20 max-w-7xl rounded-3xl lg:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div>
                            <span className="inline-flex items-center"><span className="px-6 py-2 text-base font-bold  uppercase rounded-lg">Windstatic</span></span>
                            <p className="mx-auto mt-8 text-2xl font-extrabold tracking-tight text-black md:text-4xl">
                                Time tracker for workaholics
                                <span className="md:block">Obsessed with optimizing their productivity</span>
                            </p>
                            <p className="max-w-3xl mx-auto mt-4 lg:text-lg text-black">
                                NoRush is a time tracker with analytics, leaderboards, calendars and
                                more, to help you do more in less time. Share your email so we can
                                tell you when we are launching.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center gap-3 mt-10 sm:flex-row">
                            <form className="w-full lg:w-auto bg-white/20 lg:mx-auto p-1.5 rounded-2xl">
                                <div className="w-full lg:flex lg:items-center">
                                    <div className="shrink">
                                        <input aria-label="Email address" autocomplete="email" className="block bg-slate-200 w-full p-3 text-black bg-transparent border border-transparent appearance-none rounded-xl focus:border-slate-800 focus:outline-none focus:ring-slate-800 placeholder:text-slate-700 sm:text-sm" placeholder="Email address" required="" type="email" />
                                    </div>
                                    <button className="w-full lg:w-auto bg-indigo-200 active:bg-slate-600 active:text-white/80 before:transition-colors flex-none font-medium hover:bg-indigo-900 hover:text-white inline-flex justify-center lg:ml-4 outline-2 outline-offset-2 px-6 py-2.5 relative rounded-xl text-indigo-500" type="submit">
                                        <span>Join the waitlist</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="mt-3">
                            <span className="text-black">Get to known when we will launch. We won't share your email.</span>
                        </div>
                        <div className="flex-col mx-auto mt-12 sm:flex sm:max-w-lg">
                            <p className="text-base text-black">by @twitter_handle</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Hero2
