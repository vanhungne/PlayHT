import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { ChooseVoice } from './components/ChooseVoice';
import { SpeechGenerator } from './components/SpeechGenerator';
import { SpeechStreamer } from './components/SpeechStreamer';
import { CloneVoice } from './components/CloneVoice';
import { PlayhtLogo } from './components/PlayhtLogo';
import { Sidebar } from './components/Sidebar';
import { Voice } from './hooks/useVoices';

export const DEFAULT_VOICE = {
  voiceEngine: 'PlayHT2.0',
  id: 's3://voice-cloning-zero-shot/09b5c0cc-a8f4-4450-aaab-3657b9965d0b/podcaster/manifest.json',
  name: 'Matt',
  sampleUrl: 'https://peregrine-samples.s3.amazonaws.com/parrot-samples/matt.wav',
  language: 'English (US)',
  languageCode: 'en-US',
  gender: 'male',
  ageGroup: 'adult',
  isCloned: false,
};

const App: React.FC = () => {
  const [selectedVoice, setSelectedVoice] = useState<Voice>(DEFAULT_VOICE);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-bl
        from-gray-900
        via-gray-800
        to-black
        text-gray-200
      "
    >
      {/* Transition cho sidebar trên mobile */}
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay mờ khi sidebar mở */}
            <div className="fixed inset-0 bg-black/70" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              {/* Panel sidebar */}
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  {/* Nút đóng sidebar */}
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component (có thể chỉnh sửa thêm để “dark theme” */}
                <Sidebar />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Sidebar trên desktop (cố định bên trái) */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col shadow-xl">
        <Sidebar />
      </div>

      {/* Khối nội dung chính (bên phải sidebar) */}
      <div className="lg:pl-72">
        {/* Header bar */}
        <div className="
          sticky top-0 z-40 flex h-16 shrink-0
          items-center gap-x-4 border-b border-gray-700
          bg-gray-900/80 px-4 shadow-md
          sm:gap-x-6 sm:px-6 lg:px-8
          backdrop-blur-md
        ">
          {/* Nút mở sidebar (chỉ hiện trên mobile) */}
          <button
            type="button"
            className="text-gray-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Logo/brand */}
          <div className="flex flex-1 items-center">
            <PlayhtLogo />
            <span className="ml-4 font-semibold text-lg tracking-wide">
              PlayHT Voice Generator
            </span>
          </div>
        </div>

        {/* Nội dung chính */}
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Card tổng thể */}
            <div className="
              bg-white/5
              rounded-xl
              shadow-2xl
              p-8
              border border-gray-700
              backdrop-blur-sm
            ">
              {/* Tiêu đề */}
              <h1 className="text-4xl font-extrabold mb-8 text-gray-100 border-b border-gray-700 pb-4">
                Voice Management
              </h1>

              <div className="space-y-8">
                {/* Card ChooseVoice */}
                <div className="
                  bg-white/5
                  backdrop-blur-sm
                  rounded-xl
                  p-6
                  border border-gray-700
                  shadow-lg
                ">
                  <ChooseVoice selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
                </div>

                {/* Card CloneVoice */}
                <div className="
                  bg-white/5
                  backdrop-blur-sm
                  rounded-xl
                  p-6
                  border border-gray-700
                  shadow-lg
                ">
                  <CloneVoice setSelectedVoice={setSelectedVoice} />
                </div>

                {/* Card SpeechGenerator */}
                <div className="
                  bg-white/5
                  backdrop-blur-sm
                  rounded-xl
                  p-6
                  border border-gray-700
                  shadow-lg
                ">
                  <SpeechGenerator selectedVoice={selectedVoice} />
                </div>

                {/* Card SpeechStreamer */}
                <div className="
                  bg-white/5
                  backdrop-blur-sm
                  rounded-xl
                  p-6
                  border border-gray-700
                  shadow-lg
                ">
                  <SpeechStreamer selectedVoice={selectedVoice} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
