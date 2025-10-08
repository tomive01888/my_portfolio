import { useState } from "react";
import { ClipboardCopy } from "lucide-react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="mt-2 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 select-none cursor-pointer flex items-center gap-2"
      >
        <ClipboardCopy size={18} /> Copy URL
      </button>

      {/* Toast popup */}
      {copied && (
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                     bg-gray-900 text-white text-sm px-3 py-1 rounded
                     shadow-md animate-fade-in-out pointer-events-none text-nowrap"
        >
          ✅ Copied!
        </div>
      )}
    </div>
  );
};

export default CopyButton;
