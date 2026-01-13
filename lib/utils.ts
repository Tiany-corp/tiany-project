import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Fusionne les classes CSS de manière intelligente.
 * - clsx : permet la logique conditionnelle (objets, ternaires).
 * - twMerge : résout les conflits de classes Tailwind (ex: 'p-2 p-4' devient 'p-4').
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}