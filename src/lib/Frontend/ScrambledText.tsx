import React, { useState, useEffect } from "react";

const ScrambledText: React.FC<{
  text: string;
  durationInSeconds: number;
}> = ({ text, durationInSeconds }) => {
  const [scrambledText, setScrambledText] = useState(text);

  useEffect(() => {
    // Function to scramble the text
    const scrambleText = () => {
      const characters = text.split("");
      const scrambledCharacters = characters.sort(() => Math.random() - 0.5);
      const newScrambledText = scrambledCharacters.join("");
      setScrambledText(newScrambledText);
    };

    // Interval for scrambling the text
    const scrambleInterval = setInterval(scrambleText, 100); // Decreased interval to 100 milliseconds for faster scramble

    // Stop scrambling after the specified duration
    setTimeout(() => {
      clearInterval(scrambleInterval);
      setScrambledText(text);
    }, durationInSeconds * 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(scrambleInterval);
    };
  }, [text, durationInSeconds]);

  return <div>{scrambledText}</div>;
};

export default ScrambledText;
