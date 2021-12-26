export default function firstLetterToUpper(str: string): string {
    return `${str.split(' ')[0].toLowerCase().charAt(0).toUpperCase()}${str.split(' ')[0].toLowerCase().slice(1)}`;
}