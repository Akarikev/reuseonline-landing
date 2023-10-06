import Codeblock from "@/components/Codeblock";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Home() {
  const snippet = `
  
  import React from "react";
  import useOnlineStatus from "re-use-online";
  
  function MyComponent() {
    const isOnline = useOnlineStatus();
  
    return (
      <div>
        {isOnline ? (
          <p>You are connected to the internet!</p>
        ) : (
          <p>No Internet Connection</p>
        )}
      </div>
    );
  }
  
  export default MyComponent;

`;

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center ">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700 cursor-pointer ">
            <code>reuseonline -v 1.1.6</code>
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          <span className="text-blue-700">reuseOnline</span> Hook
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          reuseonline - A React custom hook to check the online status of a
          user's device.
        </p>
        <div className="mt-7 mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-md border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700 cursor-pointer ">
            <code>npm i re-use-online</code>
          </p>
        </div>
      </MaxWidthWrapper>

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50% -11rem) ] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/reusehook.png"
                    width={1349}
                    height={563}
                    alt="product preview"
                    quality={100}
                    className="rounded-md bg-white w-full object-contain p-2 sm:p-4 md:p-4 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 "
            >
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-[calc(50% -13rem) ] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              How it <span className="text-blue-600 font-bold">Works</span>{" "}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {" "}
              The useOnlineStatus hook utilizes the{" "}
              <code className="bg-gray-800 p-1 rounded-md text-white">
                navigator.onLine
              </code>{" "}
              property to determine the initial online status of the user's
              device. It also adds event listeners for the <code className="bg-green-600 p-1 rounded-md text-white">online</code>{" "}
              and <code className="bg-red-600 p-1 rounded-md text-white">offline</code> events to update the online status
              dynamically.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
