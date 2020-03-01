export class Utilities {
    getLength(str: string): number {
        return str.length;
    }
    changeCase(str: string, c: string): string {
        if(c === 'L') return str.toLowerCase();
        if(c === 'U') return str.toUpperCase();
        return str;
    }
}