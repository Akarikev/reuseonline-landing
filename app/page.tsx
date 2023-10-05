import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center ">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700 cursor-pointer ">
            reuseonline --v 1.1.6
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-700">reuseOnline</span> Hook
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
         reuseonline - A React custom hook to check the online status of a user's device.
        </p>
      </MaxWidthWrapper>
    </>
  );
}