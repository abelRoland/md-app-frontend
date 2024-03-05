import { MediaKind } from './constants'
export interface TipRecords {
  id: string
  fields: {
    tip_kind: string
    tip_title: string
    tip_description: string
  }
}

export interface Medias {
  _id: string
  title: string
  description: string
  mediaLink: string
  mediaKind: MediaKind
}
