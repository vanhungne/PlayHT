import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function Select({
                         label,
                         id,
                         options,
                         value,
                         onChange,
                       }: {
  label: string;
  id: string;
  options: { name: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  description?: string;
}) {
  return (
    <div className="w-full flex flex-col gap-1">
      {/* Label */}
      <label
        htmlFor={id}
        className="
          text-sm
          font-semibold
          text-gray-900
          dark:text-gray-100
          flex
          items-center
          gap-2
        "
      >
        {label}
      </label>

      {/* Container bọc để hiển thị icon mũi tên */}
      <div className="relative">
        <select
          id={id}
          name={id}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          className="
            block w-full
            rounded-md
            border-0
            py-2
            pl-3 pr-10
            text-gray-900
            dark:text-gray-100
            dark:bg-neutral-900
            bg-white
            ring-1 ring-gray-300
            dark:ring-neutral-800
            focus:ring-2 focus:ring-indigo-600
            focus:outline-none
            sm:text-sm sm:leading-6
            transition-all
          "
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>

        {/* Icon mũi tên bên phải */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0
            flex
            items-center
            pr-2
            text-gray-400
            dark:text-gray-500
          "
        >
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
