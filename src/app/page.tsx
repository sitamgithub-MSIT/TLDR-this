"use client";

import Image from "next/image";
import "regenerator-runtime/runtime";
import { ChangeEvent, useState } from "react";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";
import TextArea from "@/components/Inputs/TextArea";
import FileUpload from "@/components/Inputs/FileUpload";
import LinkPaste from "@/components/Inputs/LinkPaste";
import ModeSelector from "@/components/Inputs/ModeSelector";
import SvgDecorations from "@/components/SvgDecorations";
import CategoryLinks from "@/components/CategoryLinks";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import { rtfToText } from "@/utils/rtfToText";
import useSummarize from "@/hooks/useSummarize";

/**
 * Renders the main home page component of the application.
 * This component provides a user interface for text summarization, including input methods,
 * summarization options, and various interactive features.
 * 
 * @returns {JSX.Element} A React component representing the home page with text input, 
 * summarization output, and various control elements.
 */
export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [feedbackStatus, setFeedbackStatus] = useState<
    "none" | "liked" | "disliked"
  >("none");
  const [modes] = useState<string[]>([
    "Concise",
    "Detailed",
    "Fluency",
    "Creative",
    "Bullet Points",
  ]);
  const [selectedMode, setSelectedMode] = useState<string>("Concise");
  const targetText = useSummarize(sourceText, selectedMode);

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setFeedbackStatus((prevStatus) =>
      prevStatus === "liked" ? "none" : "liked"
    );
  };

  const handleDislike = () => {
    setFeedbackStatus((prevStatus) =>
      prevStatus === "disliked" ? "none" : "disliked"
    );
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      localStorage.setItem("favoriteSummary", targetText);
    } else {
      localStorage.removeItem("favoriteSummary");
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col md:flex-row items-center justify-center p-4 md:p-8 overflow-y-auto lg:h-full">
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              TLDR <span className="text-[#f87315]">this</span>
            </h1>
            <p className="mt-3 text-neutral-400">
              <b>TLDR this:</b>⚡Instant Summaries, ✨Effortless Clarity!
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="source-text"
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setSourceText(e.target.value)
                    }
                    placeholder="Enter text to summarize"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent
                        setSourceText={setSourceText}
                      />
                      <IconVolume
                        size={22}
                        className="text-gray-400"
                        onClick={() => handleAudioPlayback(sourceText)}
                      />
                      <FileUpload handleFileUpload={handleFileUpload} />
                      <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </span>
                    <span className="text-sm pr-4 text-gray-400">
                      {sourceText.length} / 6000
                    </span>
                  </div>
                </div>
                <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="target-text"
                    value={targetText}
                    onChange={() => {}}
                    placeholder="Summary will appear here"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex items-center space-x-2 flex-row">
                      <ModeSelector
                        selectedMode={selectedMode}
                        setSelectedMode={setSelectedMode}
                        modes={modes}
                      />
                      <IconVolume
                        size={22}
                        className="text-gray-400"
                        onClick={() => handleAudioPlayback(targetText)}
                      />
                    </span>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                      <IconCopy
                        size={22}
                        onClick={handleCopyToClipboard}
                        className="text-gray-400"
                      />
                      {copied && (
                        <span className="text-xs text-green-500">Copied!</span>
                      )}
                      <IconThumbUp
                        size={22}
                        onClick={handleLike}
                        className={
                          feedbackStatus === "liked"
                            ? "text-green-500"
                            : "text-gray-400"
                        }
                      />
                      <IconThumbDown
                        size={22}
                        onClick={handleDislike}
                        className={
                          feedbackStatus === "disliked"
                            ? "text-red-500"
                            : "text-gray-400"
                        }
                      />
                      <IconStar
                        size={22}
                        onClick={handleFavorite}
                        className={
                          favorite ? "text-yellow-500" : "text-gray-400"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <SvgDecorations />
            </div>
            <CategoryLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
