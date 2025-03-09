const Banner = () => {
    return (
        <section className="w-full bg-[#f5f5f5] border-t border-b text-gray-700 py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 border-l border-r">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-medium">
                        Scale with security.

                        OpenCV SyncX is audited and certified.
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Stay updated with the latest trends and opportunities.
                    </p>
                </div>

                <a
                    href="#"
                    className="mt-6 md:mt-0 px-6 py-3 bg-primary text-white font-semibold text-lg rounded-lg hover:bg-opacity-80 transition"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export { Banner };
