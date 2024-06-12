import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
