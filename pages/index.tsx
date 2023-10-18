import { IconAt, IconNotification, IconGlobe, IconWand, IconSearch, IconArrowRight } from "@tabler/icons-react";
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
      <div className="relaxing-background">
        <a
          className="relaxing-icon absolute top-2 right-2 p-4 cursor-pointer"
          href="https://www.threads.net/@officialsphrex"
          target="_blank"
          rel="noreferrer"
        >
          <IconAt />
        </a>

        <a className="relaxing-icon absolute top-2 right-2 p-4 cursor-pointer" href="https://resources.nectarhub.xyz/" target="_blank" rel="noreferrer">
          <IconNotification />
        </a>

        <a className="relaxing-icon absolute top-2 left-2 p-4 cursor-pointer" href="https://prompt.nectarhub.xyz/" target="_blank" rel="noreferrer">
          <IconGlobe size={24} />
        </a>

        {showSearch && (
          <div className="relaxing-container mx-auto flex h-full w-full max-w-[750px] flex-col items-center space-y-6 px-3 pt-32 sm:pt-64">
            <div className="flex items-center">
              <IconWand className="relaxing-icon" />
              <div className="ml-1 text-center text-4xl">NectarGPT</div>
            </div>

            <div className="relaxing-search relative w-full">
              <IconSearch className="text-[#D4D4D8] absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />

              <input
                className="relaxing-input h-12 w-full rounded-full border border-gray-300 pl-4 focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 text-lg"
                type="text"
                placeholder="What would you like today..."
              />

              <a href="https://ai.nectarhub.xyz/">
                <button className="relaxing-button">
                  <IconArrowRight className="absolute right-2 top-2.5 h-7 w-7 rounded-full bg-blue-300 p-1 hover:bg-blue-400 hover:cursor-pointer sm:right-3 sm:top-3 sm:h-10 sm:w-10" />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
