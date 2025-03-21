import {
  HomeIcon,
  SpeakerWaveIcon,
  ClipboardDocumentIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Voice Library', href: '', icon: SpeakerWaveIcon, current: false },
  { name: 'My Projects', href: '#', icon: ClipboardDocumentIcon, current: false },
  { name: 'Profile', href: '#', icon: UserIcon, current: false },
];

export function Sidebar() {
  return (
    <div
      className="
        flex grow flex-col gap-y-5 overflow-y-auto
        bg-gradient-to-b from-white via-primary-50 to-white
        border-r border-gray-200
        px-6 pb-4
        shadow-xl
      "
    >
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://playtht-website-assets.s3.amazonaws.com/img/brand/favicon-32x32.png"
          alt="PlayHT"
        />
      </div>

      {/* Nav chính */}
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={clsx(
                      item.current
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-primary-100',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors'
                    )}
                  >
                    <item.icon
                      className={clsx(
                        item.current
                          ? 'text-primary-700'
                          : 'text-gray-400 group-hover:text-primary-700',
                        'h-6 w-6 shrink-0 transition-colors'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Khối trợ giúp / tài liệu */}
          <li className="mt-auto">
            <div className="bg-primary-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-sm font-semibold text-primary-900">
                Need Help?
              </h3>
              <p className="mt-2 text-sm text-primary-700">
                Check our documentation or contact support for assistance.
              </p>
              <a
                href="#"
                className="
                  mt-4 block text-sm font-semibold
                  text-primary-600 hover:text-primary-500
                "
              >
                View Documentation →
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
