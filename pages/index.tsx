import { IconBrandTwitter, IconNotification, IconGlobe, IconWand, IconSearch, IconArrowRight } from "@tabler/icons-react";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [showSearch, setShowSearch] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>NectarGPT</title>
        <meta name="description" content="AI-powered search." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="h-screen overflow-auto bg-[#18181C] text-[#D4D4D8]">
        <a
          className="absolute top-0 right-12 p-4 cursor-pointer"
          href="https://www.threads.net/@officialsphrex"
          target="_blank"
          rel="noreferrer"
        >
          <IconBrandTwitter />
        </a>

        <a className="absolute top-0 right-2 p-4 cursor-pointer" href="" target="_blank" rel="noreferrer">
          <IconNotification />
        </a>

        <a className="absolute top-0 left-2 p-4 cursor-pointer" href="" target="_blank" rel="noreferrer">
          <IconGlobe size={24} />
        </a>

        {showSearch && (
          <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center space-y-6 px-3 pt-32 sm:pt-64">
            <div className="flex items-center">
              <IconWand />
              <div className="ml-1 text-center text-4xl">NectarGPT</div>
            </div>

            <div className="relative w-full">
              <IconSearch className="text=[#D4D4D8] absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />

              <input
                className="h-12 w-full rounded-full border border-zinc-600 bg-[#2A2A31] pr-12 pl-11 focus:border-zinc-800 focus:bg-[#18181C] focus:outline-none focus:ring-2 focus:ring-zinc-800 sm:h-16 sm:py-2 sm:pr-16 sm:pl-16 sm:text-lg"
                type="text"
                placeholder="What would you like today..."
              />

              <a href="/promptbar">
                <button>
                  <IconArrowRight
                    className="absolute right-2 top-2.5 h-7 w-7 rounded-full bg-blue-500 p-1 hover:cursor-pointer hover:bg-blue-600 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
                  />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
