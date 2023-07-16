import { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { IconArrowRight, IconSearch, IconWand } from "@tabler/icons-react";

interface SearchProps {
  onSearch: (searchResult: SearchQuery) => void;
  onAnswerUpdate: (answer: string) => void;
  onDone: (done: boolean) => void;
}

export const Search: FC<SearchProps> = ({ onSearch, onAnswerUpdate, onDone }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState<string>("");
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = () => {
    if (!query) {
      alert("Please enter a query");
      return;
    }

    setLoading(true);
    onSearch();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center pt-64 sm:pt-72 flex-col">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <div className="mt-8 text-2xl">
          <a href="/promptbar">Harvesting Nectar... Click here to get your newly harvested apps</a> 
          </div>
        </div>
      ) : (
        <div className="mx-auto flex h-full w-full max-w-[750px] flex-col items-center space-y-6 px-3 pt-32 sm:pt-64">
          <div className="flex items-center">
            <IconWand />
            <div className="ml-1 text-center text-4xl">NectarGPT</div>
          </div>

          <div className="relative w-full">
            <IconSearch className="text=[#D4D4D8] absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />

            <input
              ref={inputRef}
              className="h-12 w-full rounded-full border border-zinc-600 bg-[#2A2A31] pr-12 pl-11 focus:border-zinc-800 focus:bg-[#18181C] focus:outline-none focus:ring-2 focus:ring-zinc-800 sm:h-16 sm:py-2 sm:pr-16 sm:pl-16 sm:text-lg"
              type="text"
              placeholder="What would you like to achieve today..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button>
              <IconArrowRight
                onClick={handleSearch}
                className="absolute right-2 top-2.5 h-7 w-7 rounded-full bg-blue-500 p-1 hover:cursor-pointer hover:bg-blue-600 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
              />
            </button>
          </div>

          <button
            className="flex cursor-pointer items-center space-x-2 rounded-full border border-zinc-600 px-3 py-1 text-sm text-[#D4D4D8] hover:text-white"
            onClick={() => setShowSettings(!showSettings)}
          >
            {showSettings ? "Hide" : "Show"} Settings
          </button>

          {showSettings && (
            <>
              <div className="text-center text-[#D4D4D8]">Please enter your OpenAI API key.</div>

              <div className="flex space-x-2">
                <div
                  className="flex cursor-pointer items-center space-x-2 rounded-full border border-zinc-600 bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600"
                >
                  Save
                </div>

                <div
                  className="flex cursor-pointer items-center space-x-2 rounded-full border border-zinc-600 bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                >
                  Clear
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};