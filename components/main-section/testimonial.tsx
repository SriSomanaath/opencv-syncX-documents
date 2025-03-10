import Image from "next/image";

const Testimonial = () => {
    return (
        <section className="w-full bg-white dark:bg-black py-20 md:py-32 border-t border-b border-gray-300 dark:border-gray-700">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
                <div className="flex flex-col md:flex-row items-center md:items-start border-l border-r border-gray-300 dark:border-gray-700 p-6 md:space-x-6">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                        <Image
                            src="/image_sketch.jpg"
                            alt="Testimonial"
                            width={160}
                            height={160}
                            className="object-contain rounded-full"
                        />
                    </div>
                    <div className="flex-1 md:ml-6 text-center md:text-left w-full">
                        <p className="text-2xl md:text-3xl font-serif font-medium text-gray-900 dark:text-white leading-snug">
                            OpenCV SyncX is the CRM that feels truly modern. It&apos;s powerful, flexible, and fast to build with.
                        </p>
                        <p className="mt-2 text-gray-500 dark:text-gray-300 text-lg">
                            Vikas Gupta - Managing Director of OpenCV University
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonial };
