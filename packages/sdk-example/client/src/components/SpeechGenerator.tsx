import React, { useRef, useState } from 'react';
import { generateSpeech } from '../API/tts.requests';
import { Spinner } from './Spinner';
import { Voice } from '../hooks/useVoices';

export const SpeechGenerator: React.FC<{ selectedVoice: Voice }> = ({ selectedVoice }) => {
  const [text, setText] = useState<string>(
    "Immersed in the text's pages, I journeyed through a world woven with words and imagination."
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [audioURL, setAudioURL] = useState<string>('');
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const handleGenerateSpeech = async () => {
    if (!audioElementRef.current) return;
    setLoading(true);

    try {
      const apiResponse = await generateSpeech(text, selectedVoice);
      setAudioURL(apiResponse.audioUrl);

      const audioElement = audioElementRef.current;
      audioElement.pause();
      audioElement.currentTime = 0;
      audioElement.load();

      // Bắt sự kiện loadeddata để auto-play khi tải xong
      const playAudio = () => {
        audioElement.play();
        setLoading(false);
      };

      const onError = () => {
        setLoading(false);
        console.error('Error loading audio');
      };

      audioElement.addEventListener('loadeddata', playAudio);
      audioElement.addEventListener('error', onError);

      return () => {
        audioElement.removeEventListener('loadeddata', playAudio);
        audioElement.removeEventListener('error', onError);
      };
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div
      className="
        bg-white/5
        backdrop-blur-sm
        border border-gray-700
        rounded-xl
        p-6
        shadow-lg
        text-gray-100
        transition-all
      "
    >
      {/* Tiêu đề */}
      <h2 className="text-2xl font-bold border-b border-gray-600 pb-2 mb-4">
        Generate Speech from Text
      </h2>

      {/* Phần nhập text */}
      <div className="flex flex-col gap-2">
        <label htmlFor="textToGenerate" className="text-lg font-semibold">
          Enter text to generate:
        </label>
        <textarea
          id="textToGenerate"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full
            h-32
            bg-transparent
            resize-none
            border border-gray-600
            rounded-lg
            p-3
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:border-transparent
            placeholder:text-gray-400
            transition-all
          "
          placeholder="Type or paste your text here..."
        />
      </div>

      {/* Nút Generate Speech */}
      <div className="mt-4">
        <button
          onClick={handleGenerateSpeech}
          disabled={loading}
          className="
            flex
            items-center
            gap-2
            bg-gradient-to-r from-green-600 to-green-700
            hover:from-green-500 hover:to-green-600
            focus:outline-none
            focus:ring-4
            focus:ring-green-500
            font-semibold
            text-white
            py-2 px-4
            rounded-lg
            shadow-md
            disabled:opacity-50
            transition-all
          "
        >
          {loading && <Spinner />}
          <span>Generate Speech</span>
        </button>
      </div>

      {/* Audio Player */}
      <div className="mt-4">
        <audio
          id="audioPlayer"
          controls
          ref={audioElementRef}
          className="w-full border border-gray-600 rounded-lg"
          src={audioURL}
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};