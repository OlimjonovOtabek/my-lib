declare function add(a: number, b: number): number;
declare function shuffleArray<T>(array: T[]): T[];
declare function calculateAge(birthDate: Date): number;
declare function slugify(input: string): string;
declare function truncateString(input: string, maxLength: number): string;
declare function formatDate(date: Date, format: string): string;
declare function generateRandomString(length: number): string;
declare function capitalizeString(input: string): string;
declare function validatePhoneNumber(phoneNumber: string): boolean;

export { add, calculateAge, capitalizeString, formatDate, generateRandomString, shuffleArray, slugify, truncateString, validatePhoneNumber };
