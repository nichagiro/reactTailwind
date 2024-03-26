interface Color {
  [key: string]: string
}

export const bg: Color = {
  gray: "focus:border-gray-400 focus:ring-gray-300",
  red: "focus:border-red-400 focus:ring-red-300",
  orange: "focus:border-orange-400 focus:ring-orange-300",
  yellow: "focus:border-yellow-400 focus:ring-yellow-300",
  green: "focus:border-green-400 focus:ring-green-300",
  teal: "focus:border-teal-400 focus:ring-teal-300",
  blue: "focus:border-blue-400 focus:ring-blue-300",
  indigo: "focus:border-indigo-400 focus:ring-indigo-300",
  purple: "focus:border-purple-400 focus:ring-purple-300",
  pink: "focus:border-pink-400 focus:ring-pink-300",
  lime: "focus:border-lime-400 focus:ring-lime-300",
  cyan: "focus:border-cyan-400 focus:ring-cyan-300",
  sky: "focus:border-sky-400 focus:ring-sky300",
  fuchsia: "focus:border-fuchsia-400 focus:ring-fuchsia-300",
  rose: "focus:border-rose-400 focus:ring-rose-300",
  slate: "focus:border-slate-400 focus:ring-slate-300",
  zinc: "focus:border-zinc-400 focus:ring-zinc-300",
  stone: "focus:border-stone-400 focus:ring-stone-300",
  emerald: "focus:border-emerald-400 focus:ring-emerald-300",
  amber: "focus:border-amber-400 focus:ring-amber-300",
  neutral: "focus:border-neutral-400 focus:ring-neutral-300"
};

export const selectClass = "disabled:bg-gray-100 border-gray-300 mt-1.5 w-full rounded-lg border p-3 text-gray-700 sm:text-sm focus:outline-none focus:ring focus:ring-opacity-40"