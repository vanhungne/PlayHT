import { useRef, useState } from 'react';
import { Voice } from '../hooks/useVoices';
import { Spinner } from './Spinner';
import { CONFIG } from '../config';

export const SpeechStreamer: React.FC<{ selectedVoice: Voice }> = ({ selectedVoice }) => {
  const [text, setText] = useState<string>(
    'The clear, babbling stream meandered through the lush, sunlit meadow, creating a soothing and tranquil atmosphere.'
  );
  const [isGeneratingStream, setIsGeneratingStream] = useState<boolean>(false);
  const [audioSrc, setAudioSrc] = useState<string>('');
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const handleStreamSpeech = () => {
    if (!audioElementRef.current) return;

    setIsGeneratingStream(true);

    // Xử lý error
    const onError = () => {
      setIsGeneratingStream(false);
      console.error('Error loading audio');
    };

    try {
      const audioElement = audioElementRef.current;
      audioElement.pause();
      audioElement.currentTime = 0;

      // Tạo query params
      const searchParams = new URLSearchParams();
      searchParams.set('text', text);
      searchParams.set('voiceId', selectedVoice.id);
      searchParams.set('voiceEngine', selectedVoice.voiceEngine);

      // Tạo audio source URL
      const newAudioSrc = `${CONFIG.BACKEND_HOST_URL}/streamSpeech?${searchParams.toString()}`;
      setAudioSrc(newAudioSrc);

      // load audio mới
      audioElement.load();

      // Khi dữ liệu audio đã tải xong -> tự động play
      const playAudio = () => {
        audioElement.play();
        setIsGeneratingStream(false);
      };

      audioElement.addEventListener('loadeddata', playAudio);
      audioElement.addEventListener('error', onError);

      return () => {
        audioElement.removeEventListener('loadeddata', playAudio);
        audioElement.removeEventListener('error', onError);
      };
    } catch (error) {
      console.error(error);
      setIsGeneratingStream(false);
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
      <h2 className="text-2xl font-bold border-b border-gray-600 pb-2 mb-4">
        Stream Speech from Text
      </h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="streamTextToGenerate" className="text-lg font-semibold">
          Enter text to stream:
        </label>
        <textarea
          id="streamTextToGenerate"
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
            placeholder:text-gray-400
            transition-all
          "
          placeholder="Type or paste your text here..."
        ></textarea>
      </div>

      <div className="mt-4">
        <button
          onClick={handleStreamSpeech}
          disabled={isGeneratingStream}
          className="
            inline-flex items-center gap-2
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
          {isGeneratingStream && <Spinner />}
          <span>Stream Speech</span>
        </button>
      </div>

      <div className="mt-4">
        <audio
          id="streamAudioPlayer"
          controls
          ref={audioElementRef}
          className="w-full border border-gray-600 rounded-lg"
          src={audioSrc}
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
