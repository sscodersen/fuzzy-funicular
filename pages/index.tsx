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
      <div className="glass-container">
        <a
          className="glass-icon absolute top-2 right-2 p-4 cursor-pointer"
          href="https://www.threads.net/@officialsphrex"
          target="_blank"
          rel="noreferrer"
        >
          <IconAt />
        </a>

        <a className="glass-icon absolute top-2 right-2 p-4 cursor-pointer" href="https://resources.nectarhub.xyz" target="_blank" rel="noreferrer">
          <IconNotification />
        </a>

        <a className="glass-icon absolute top-2 left-2 p-4 cursor-pointer" href="https://prompt.nectarhub.xyz" target="_blank" rel="noreferrer">
          <IconGlobe size={24} />
        </a>

        {showSearch && (
          <div className="glass-search-container mx-auto flex h-full w-full max-w-[750px] flex-col items-center space-y-6 px-3 pt-32 sm:pt-64">
            <div className="flex items-center">
              <IconWand className="glass-icon" />
              <div className="glass-title">NectarGPT</div>
            </div>

            <div className="glass-search relative w-full">
              <IconSearch className="glass-search-icon" />

              <input
                className="glass-input"
                type="text"
                placeholder="What would you like today..."
              />

              <a href="https://ai.nectarhub.xyz">
                <button className="glass-button">
                  <IconArrowRight className="glass-button-icon" />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
