interface Color {
  [key: string]: string
}

export const bg: Color = {
  gray: "hover:bg-gray-700 bg-gray-600",
  red: "hover:bg-red-700 bg-red-600",
  orange: "hover:bg-orange-700 bg-orange-600",
  yellow: "hover:bg-yellow-700 bg-yellow-600",
  green: "hover:bg-green-700 bg-green-600",
  teal: "hover:bg-teal-700 bg-teal-600",
  blue: "hover:bg-blue-700 bg-blue-600",
  indigo: "hover:bg-indigo-700 bg-indigo-600",
  purple: "hover:bg-purple-700 bg-purple-600",
  pink: "hover:bg-pink-700 bg-pink-600",
  lime: "hover:bg-lime-700 bg-lime-600",
  cyan: "hover:bg-cyan-700 bg-cyan-600",
  sky: "hover:bg-sky-700 bg-sky-600",
  fuchsia: "hover:bg-fuchsia-700 bg-fuchsia-600",
  rose: "hover:bg-rose-700 bg-rose-600",
  slate: "hover:bg-slate-700 bg-slate-600",
  zinc: "hover:bg-zinc-700 bg-zinc-600",
  stone: "hover:bg-stone-700 bg-stone-600",
  emerald: "hover:bg-emerald-700 bg-emerald-600",
  amber: "hover:bg-amber-700 bg-amber-600",
  neutral: "hover:bg-neutral-700 bg-neutral-600",
}

export const className = "px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline cursor-pointer";
export const light = "hover:bg-neutral-200 bg-neutral-100 border text-slate-800";
export const dark = "hover:bg-slate-900 bg-slate-800 text-white";