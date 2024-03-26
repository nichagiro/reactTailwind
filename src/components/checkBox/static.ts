interface Color {
  [key: string]: string
}

export const bg: Color = {
  gray: "checked:bg-gray-400 focus:border-gray-400 focus:ring-gray-300",
  red: "checked:bg-red-400 focus:border-red-400 focus:ring-red-300",
  orange: "checked:bg-orange-400 focus:border-orange-400 focus:ring-orange-300",
  yellow: "checked:bg-yellow-400 focus:border-yellow-400 focus:ring-yellow-300",
  green: "checked:bg-green-400 focus:border-green-400 focus:ring-green-300",
  teal: "checked:bg-teal-400 focus:border-teal-400 focus:ring-teal-300",
  blue: "checked:bg-blue-400 focus:border-blue-400 focus:ring-blue-300",
  indigo: "checked:bg-indigo-400 focus:border-indigo-400 focus:ring-indigo-300",
  purple: "checked:bg-purple-400 focus:border-purple-400 focus:ring-purple-300",
  pink: "checked:bg-pink-400 focus:border-pink-400 focus:ring-pink-300",
  lime: "checked:bg-lime-400 focus:border-lime-400 focus:ring-lime-300",
  cyan: "checked:bg-cyan-400 focus:border-cyan-400 focus:ring-cyan-300",
  sky: "checked:bg-sky-400 focus:border-sky-400 focus:ring-sky-300",
  fuchsia: "checked:bg-fuchsia-400 focus:border-fuchsia-400 focus:ring-fuchsia-300",
  rose: "checked:bg-rose-400 focus:border-rose-400 focus:ring-rose-300",
  slate: "checked:bg-slate-400 focus:border-slate-400 focus:ring-slate-300",
  zinc: "checked:bg-zinc-400 focus:border-zinc-400 focus:ring-zinc-300",
  stone: "checked:bg-stone-400 focus:border-stone-400 focus:ring-stone-300",
  emerald: "checked:bg-emerald-400 focus:border-emerald-400 focus:ring-emerald-300",
  amber: "checked:bg-amber-400 focus:border-amber-400 focus:ring-amber-300",
  neutral: "checked:bg-neutral-400 focus:border-neutral-400 focus:ring-neutral-300",
};

export const style = "disabled:bg-gray-100 rounded border bg-white px-2 py-1 border-gray-300 appearance-none focus:outline-none focus:ring focus:ring-opacity-40"