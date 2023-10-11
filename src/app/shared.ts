export const ALPHABETS = Array.from(Array(26)).map((e, i) => String.fromCharCode(i + 65).toLowerCase())
export const VOCALS = ['a', 'i', 'u', 'e', 'o']
export const CONSONANTS = ALPHABETS.filter(alphabet => !VOCALS.includes(alphabet))