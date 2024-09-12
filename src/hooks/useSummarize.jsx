import { useEffect, useState } from "react";

const useSummarize = (sourceText, selectedMode) => {
  const [targetText, setTargetText] = useState("");

  useEffect(() => {
    const handleSummarize = async (sourceText) => {
      try {
        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sourceText, selectedMode }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTargetText(data.summary);
      } catch (error) {
        console.error("Error in summarizing text: ", error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleSummarize(sourceText);
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedMode]);

  return targetText;
};

export default useSummarize;
