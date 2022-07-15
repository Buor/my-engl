export interface IWord {
  id: number
  word: string
  translations: ITranslation[]
}

export interface ITranslation {
  id: number
  translation: string
}

export interface IDictionary {
  id: number
  words: IWord[]
  difficulty: number
  choosed: boolean
  wordsCount: number
}