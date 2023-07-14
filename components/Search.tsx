import { IconArrowRight, IconSearch, IconWand } from "@tabler/icons-react";
import { FC, KeyboardEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";
interface SearchProps {
  onSearch: () => void;
}

export const Search: FC<SearchProps> = ({ onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState<string>("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
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
          placeholder="Ask anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button>
          <Link to="/PromptBar">
            <IconArrowRight className="absolute right-2 top-2.5 h-7 w-7 rounded-full bg-blue-500 p-1 hover:cursor-pointer hover:bg-blue-600 sm:right-3 sm:top-3 sm:h-10 sm:w-10" />
          </Link>
        </button>

      </div>
    </div>
  );
};
