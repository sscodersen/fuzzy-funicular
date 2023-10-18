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
      <div className="h-screen bg-[#18181C] text-[#D4D4D8] flex flex-row">
        {/* Sidebar */}
        <div className="w-16 bg-[#1A1A1D] p-4 flex flex-col justify-between">
          <a href="https://www.threads.net/@officialsphrex" target="_blank" rel="noreferrer">
            <IconAt />
          </a>

          <a href="https://resources.nectarhub.xyz" target="_blank" rel="noreferrer">
            <IconNotification />
          </a>

          <a href="https://prompt.nectarhub.xyz" target="_blank" rel="noreferrer">
            <IconGlobe size={24} />
          </a>
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4">
          {showSearch && (
            <div className="max-w-xl mx-auto space-y-6">
              <div className="flex items-center">
                <IconWand className="text-[#D4D4D8] text-4xl" />
                <div className="ml-2 text-[#D4D4D8] text-4xl">NectarGPT</div>
              </div>

              <div className="relative">
                <input
                  className="w-full h-12 bg-transparent border-b-2 border-[#D4D4D8] text-[#D4D4D8] placeholder-[#D4D4D8] focus:outline-none focus:border-blue-500"
                  type="text"
                  placeholder="What would you like to achieve today..."
                />

                <a href="https://ai.nectarhub.xyz">
                  <IconArrowRight className="absolute right-0 top-0 mt-1 mr-2 h-7 w-7 text-blue-500 cursor-pointer hover:text-blue-600" />
                </a>
              </div>
            </div>
          )}

          {/* Add your GIF or visual element here */}
          <div className="mt-8 text-center">
            <img src="your-gif-url.gif" alt="Talking AI" />
          </div>
        </div>
      </div>
    </>
  );
}
