import { useState } from 'react';

const ClipboardButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 700);
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
    }
  };

  return (
    <button
    className={`p-2 rounded-full hover:bg-gray-300 ${copied ? 'hover:bg-tertiaryColor' : 'bg-gray-200'}`}
    onClick={copyToClipboard}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10l-5 5-5-5M12 15V3"/>
    </svg>
  </button>
  );
};

export default ClipboardButton;

