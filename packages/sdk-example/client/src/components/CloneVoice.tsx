import React, { useState, useRef } from 'react';
import { VoiceData, uploadAndCloneVoice } from '../API/cloning.requests';
import useVoices, { Voice } from '../hooks/useVoices';
import { Spinner } from './Spinner';

interface CloneVoiceProps {
  setSelectedVoice: React.Dispatch<React.SetStateAction<Voice>>;
}

export const CloneVoice: React.FC<CloneVoiceProps> = ({ setSelectedVoice }) => {
  const [voiceName, setVoiceName] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { refetch: refetchVoices } = useVoices();
  const [isLoading, setIsLoading] = useState(false);

  const uploadFile = async () => {
    setErrorMessage(null);
    const file = fileInputRef.current?.files?.[0];
    if (!file || !voiceName) {
      setErrorMessage('Please fill in all fields before uploading.');
      return;
    }

    setIsLoading(true);
    try {
      const data: VoiceData = await uploadAndCloneVoice(file, voiceName);
      if (!data.id) {
        throw new Error('No voice ID returned.');
      }
      await refetchVoices();

      // Cập nhật voice đã clone
      setSelectedVoice({
        ...data,
        sampleUrl: '',
        language: '',
        languageCode: '',
        gender: '',
        ageGroup: '',
      });

      setVoiceName('');
      alert(`Cloned voice ${voiceName} created successfully!`);
    } catch (error) {
      setErrorMessage(`Error uploading file: ${error}`);
    } finally {
      setIsLoading(false);
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
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">
        Clone a Voice
      </h2>

      {/* Hiển thị lỗi nếu có */}
      {errorMessage && (
        <div
          className="
            bg-red-600/20
            border border-red-400
            text-red-300
            px-4 py-3
            rounded-xl
            mb-4
          "
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-center mb-4">
        {/* Input tên voice */}
        <input
          type="text"
          value={voiceName}
          onChange={(e) => setVoiceName(e.target.value)}
          className="
            flex-1
            bg-transparent
            border border-gray-600
            rounded-lg
            px-3 py-2
            text-gray-100
            placeholder-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:border-transparent
            transition-all
          "
          placeholder="Enter voice name"
        />

        {/* Input chọn file */}
        <input
          type="file"
          ref={fileInputRef}
          className="
            text-sm
            file:mr-4
            file:py-2
            file:px-4
            file:rounded-full
            file:border-0
            file:bg-green-600/90
            file:text-gray-100
            hover:file:bg-green-500
            transition-all
          "
        />
      </div>

      {/* Nút upload */}
      <button
        onClick={uploadFile}
        disabled={isLoading}
        className="
          inline-flex items-center
          bg-gradient-to-r from-green-600 to-green-700
          hover:from-green-500 hover:to-green-600
          focus:ring-4
          focus:ring-green-500
          focus:outline-none
          text-white
          font-semibold
          py-2 px-6
          rounded-lg
          shadow-md
          disabled:opacity-50
          transition-all
        "
      >
        {isLoading && <Spinner />}
        <span className="ml-2">Clone Voice</span>
      </button>
    </div>
  );
};
