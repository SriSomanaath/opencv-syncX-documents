import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-20 md:py-32 border-t border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-16 md:px-32">
        <div className="flex border-l border-r border-gray-200 dark:border-gray-700">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <Image
              src="/image_sketch.jpg"
              alt="Testimonial"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="flex-1 md:ml-12 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-serif font-medium text-black dark:text-white leading-snug">
              OpenCV SyncX is the CRM that feels truly modern. It&apos;s powerful,
              flexible, and fast to build with.
            </p>
            <p className="mt-2 text-gray-400 dark:text-gray-300 text-lg">
              Vikas Gupta - Managing Director of OpenCV University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial };
