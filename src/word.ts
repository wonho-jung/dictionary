export interface Data {
  frequency: number;
  pronunciation: { all: string };
  results: {
    definition: string;
    examples: string[];
    partOfspeech: string;
    synonyms: string[];
    typeOf: string[];
  };
  syllables: { count: number; list: [] };
  word: string;
}
