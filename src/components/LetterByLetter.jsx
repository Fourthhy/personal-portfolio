import { useState, useEffect } from 'react';

function LetterByLetter({ content }) {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let interval;
    function displayLetters() {
      if (displayedText.length < content.length) {
        setDisplayedText((prev) => prev + content[displayedText.length]);
      } else {
        clearInterval(interval);
      }
    }
    interval = setInterval(displayLetters, 15);
    return () => clearInterval(interval);
  }, [content, displayedText]);
  return <div dangerouslySetInnerHTML={{ __html: displayedText }} />;
}

export default LetterByLetter;