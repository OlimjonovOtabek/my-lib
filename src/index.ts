export function add(a: number, b: number): number {
  return a + b;
}
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]; 
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function calculateAge(birthDate: Date): number {
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  const currentMonth = currentDate.getMonth();
  const birthMonth = birthDate.getMonth();
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function slugify(input: string): string {
  return input
    .toLowerCase() 
    .replace(/\s+/g, '-') 
    .replace(/[^a-z0-9-]/g, '') 
    .replace(/-+/g, '-') 
    .replace(/^-|-$/g, ''); 
}

export function truncateString(input: string, maxLength: number): string {
  if (input.length <= maxLength) {
    return input; // Return the original string if it's already shorter than the maximum length
  } else {
    return input.slice(0, maxLength) + '...'; // Truncate the string and append ellipses
  }
}



export function formatDate(date: Date, format: string): string {
  const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: 'full', timeStyle: 'long' });
  const formattedDate = formatter.format(date);

  switch (format) {
    case 'short':
      return formattedDate;
    case 'medium':
      return formattedDate.replace(/,[^,]+$/, ''); 
    case 'long':
      return formattedDate.split(', ')[0]; 
    default:
      throw new Error('Invalid format string.');
  }
}
// Example usage: after it should be described on description of package i should add examples firstly ustoz
// const currentDate = new Date();
// console.log(formatDate(currentDate, 'short'));
// console.log(formatDate(currentDate, 'medium'));
// console.log(formatDate(currentDate, 'long'));
export function generateRandomString(length: number): string {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset.charAt(randomIndex);
  }
  return randomString;
}

export function capitalizeString(input: string): string {
  return input.replace(/\b\w/g, (match) => match.toUpperCase());
}

// const sentence = "vector academycj j j j j j j j jiji";
// const capitalizedSentence = capitalizeString(sentence);
// console.log(capitalizedSentence); //Vector Academy cj J J J J J J J Jiji

export function validatePhoneNumber(phoneNumber: string): boolean {
  const phoneRegex = /^\+998\d{9}$/;
  return phoneRegex.test(phoneNumber);
}

// const phoneNumber = "+9989012334567";
// console.log(validatePhoneNumber(phoneNumber)); 
