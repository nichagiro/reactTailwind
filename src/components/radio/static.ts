interface Color {
  [key: string]: string
}

export const bg: Color = {
  gray: "has-[:checked]:border-gray-500 has-[:checked]:ring-gray-500",
  red: "has-[:checked]:border-red-500 has-[:checked]:ring-red-500",
  orange: "has-[:checked]:border-orange-500 has-[:checked]:ring-orange-500",
  yellow: "has-[:checked]:border-yellow-500 has-[:checked]:ring-yellow-500",
  green: "has-[:checked]:border-green-500 has-[:checked]:ring-green-500",
  teal: "has-[:checked]:border-teal-500 has-[:checked]:ring-teal-500",
  blue: "has-[:checked]:border-blue-500 has-[:checked]:ring-blue-500",
  indigo: "has-[:checked]:border-indigo-500 has-[:checked]:ring-indigo-500",
  purple: "has-[:checked]:border-purple-500 has-[:checked]:ring-purple-500",
  pink: "has-[:checked]:border-pink-500 has-[:checked]:ring-pink-500",
  lime: "has-[:checked]:border-lime-500 has-[:checked]:ring-lime-500",
  cyan: "has-[:checked]:border-cyan-500 has-[:checked]:ring-cyan-500",
  sky: "has-[:checked]:border-sky-500 has-[:checked]:ring-sky-500",
  fuchsia: "has-[:checked]:border-fuchsia-500 has-[:checked]:ring-fuchsia-500",
  rose: "has-[:checked]:border-rose-500 has-[:checked]:ring-rose-500",
  slate: "has-[:checked]:border-slate-500 has-[:checked]:ring-slate-500",
  zinc: "has-[:checked]:border-zinc-500 has-[:checked]:ring-zinc-500",
  stone: "has-[:checked]:border-stone-500 has-[:checked]:ring-stone-500",
  emerald: "has-[:checked]:border-emerald-500 has-[:checked]:ring-emerald-500",
  amber: "has-[:checked]:border-amber-500 has-[:checked]:ring-amber-500",
  neutral: "has-[:checked]:border-neutral-500 has-[:checked]:ring-neutral-500",
};

export const bgFill: Color = {
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

export const style = "has-[:checked]:ring-1 border-gray-200 hover:border-gray-300 block cursor-pointer rounded-lg border px-3 mt-1.5 text-sm font-medium shadow-sm"
export const radioStyle = "appearance-none h-3 w-3 rounded-full mt-1 focus:ring focus:ring-opacity-40 border"


export const sizeClass = {
  "2xl": "py-6",
  "xl": "py-5",
  "lg": "py-4",
  "md": "py-3",
  "sm": "py-2",
}
