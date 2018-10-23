export const reverse = (s: string): string => s.split('').reduce((acc: string[], val) => [val].concat(acc), []).join('');
