import React, { useState, useRef, useEffect } from "react";
import { RiFileCopyFill } from "react-icons/ri";

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
      },
      (err) => {
        console.error("Failed to copy text:", err);
      }
    );
  };

  const handleCopyClick = () => {
    copyToClipboard(textToCopy);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Ctrl" || event.key === "Meta") {
      // Handle both Ctrl and Meta keys for copy
      return; // Prevent default behavior for these keys
    }
    if (event.key === "c" && (event.ctrlKey || event.metaKey)) {
      copyToClipboard(textToCopy);
      event.preventDefault(); // Prevent default copy behavior
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset copied state after 2 seconds

    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, [isCopied]);

  return (
    <button
      className={`bg-gray-400 bg-opacity-10 p-2 rounded-lg ${
        isCopied ? "bg-green-500" : ""
      }`}
      onClick={handleCopyClick}
      onKeyDown={handleKeyDown}
      ref={inputRef}
    >
      <RiFileCopyFill className="text-2xl text-gray-500 cursor-pointer" />
      {isCopied && <span className="ml-0 text-sm">Copied!</span>}
    </button>
  );
};

export default CopyButton;
