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
      <div className="glassmorphism-container">
        <a
          className="glassmorphism-icon absolute top-4 right-4 p-4 cursor-pointer"
          href="https://www.threads.net/@officialsphrex"
          target="_blank"
          rel="noreferrer"
        >
          <IconAt />
        </a>

        <a className="glassmorphism-icon absolute top-4 right-4 p-4 cursor-pointer" href="https://resources.nectarhub.xyz" target="_blank" rel="noreferrer">
          <IconNotification />
        </a>

        <a className="glassmorphism-icon absolute top-4 left-4 p-4 cursor-pointer" href="https://prompt.nectarhub.xyz" target="_blank" rel="noreferrer">
          <IconGlobe size={24} />
        </a>

        {showSearch && (
          <div className="glassmorphism-search-container">
            <div className="glassmorphism-search-bar">
              <IconWand className="glassmorphism-icon" />
              <div className="glassmorphism-title">NectarGPT</div>
            </div>

            <div className="glassmorphism-search-box">
              <IconSearch className="glassmorphism-search-icon" />

              <input
                className="glassmorphism-input"
                type="text"
                placeholder="What would you like today..."
              />

              <a href="https://ai.nectarhub.xyz">
                <button className="glassmorphism-button">
                  <IconArrowRight className="glassmorphism-button-icon" />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
