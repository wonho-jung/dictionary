export interface word {
  frequency: number;
  pronunciation: { all: string };
  results: object[];
  syllables: { count: number; list: [] };
  word: string;
}
