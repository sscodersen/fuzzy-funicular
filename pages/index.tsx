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
      <div className="google-inspired-container">
        <div className="google-header">
          <a
            className="google-icon"
            href="https://www.threads.net/@officialsphrex"
            target="_blank"
            rel="noreferrer"
          >
            <IconAt />
          </a>

          <a className="google-icon" href="https://resources.nectarhub.xyz" target="_blank" rel="noreferrer">
            <IconNotification />
          </a>

          <a className="google-icon" href="https://prompt.nectarhub.xyz" target="_blank" rel="noreferrer">
            <IconGlobe size={24} />
          </a>
        </div>

        {showSearch && (
          <div className="google-search-container">
            <div className="google-search-bar">
              <IconSearch className="google-search-icon" />

              <input
                className="google-search-input"
                type="text"
                placeholder="Search Google"
              />

              <a href="https://ai.nectarhub.xyz">
                <button className="google-search-button">
                  <IconArrowRight className="google-search-button-icon" />
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
