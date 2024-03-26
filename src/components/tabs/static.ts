interface Color {
  [key: string]: string
}

export const bg: Color = {
  gray: "text-gray-600",
  red: "text-red-600",
  orange: "text-orange-600",
  yellow: "text-yellow-600",
  green: "text-green-600",
  teal: "text-teal-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  purple: "text-purple-600",
  pink: "text-pink-600",
  lime: "text-lime-600",
  cyan: "text-cyan-600",
  sky: "text-sky-600",
  fuchsia: "text-fuchsia-600",
  rose: "text-rose-600",
  slate: "text-slate-600",
  zinc: "text-zinc-600",
  stone: "text-stone-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
  neutral: "text-neutral-600",
};

export type ITabs = {
  name: string,
  value: string | number
  render: string | JSX.Element
}

export const styleSel = "shrink-0 rounded-t-lg border border-gray-300 border-b-gray-50 p-3 text-sm font-medium cursor-pointer"
export const clas = "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"