export interface Word {
  id?: number;
  word: string;
  score: number;
  createdDate?: string;
}

export interface WordApiRequest {
  word: string;
  score: number;
}

export interface WordApiResponse {
  id: number;
  word: string;
  score: number;
  createdDate: string;
}

export interface WordsStatePayload {
  list: Word[];
  loaded: boolean;
  error?: any;
}
export interface WordsState {
  words: WordsStatePayload;
}
