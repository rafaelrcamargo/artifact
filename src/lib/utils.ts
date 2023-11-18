import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge multiple class names into a single string.
 * @param inputs Class names to merge.
 * @returns A single string of class names.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

/**
 * Clamp a number between a minimum and maximum value.
 * @param num Number to clamp.
 * @param min Minimum value.
 * @param max Maximum value.
 * @returns A number between the minimum and maximum values.
 */
export const clamp = (num: number, min: number, max: number) =>
  Math.min(Math.max(num, min), max)
