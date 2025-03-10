const Banner = () => {
    return (
        <section className="w-screen bg-[#f5f5f5] dark:bg-[#1a1a1a] border-t border-b text-gray-700 dark:text-gray-200 py-12 -ml-8 md:py-16 mx-auto px-0">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 border-l border-r">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-medium text-black dark:text-white">
                        Scale with security.
                        <br />
                        OpenCV SyncX is audited and certified.
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        Stay updated with the latest trends and opportunities.
                    </p>
                </div>

                <a
                    href="#"
                    className="mt-6 md:mt-0 px-6 py-3 bg-primary text-white dark:text-black font-semibold text-lg rounded-lg hover:bg-opacity-80 transition dark:bg-primary-dark dark:hover:bg-opacity-80"
                >
                    Get Started
                </a>
            </div>
        </section>
    );
};

export { Banner };
