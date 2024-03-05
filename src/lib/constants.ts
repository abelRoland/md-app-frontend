export enum MediaKind {
  LINK = 'link',
  VIDEO = 'video',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'non-binary',
  NOT_DECLARED = 'not-declared',
}

export type UserType = {
  _id: string
  name: string
  email: string
  age: number
  gender: Gender
}

export type ProfileProps = {
  user: UserType
}

export enum LoadTop {
  TOP20 = 'top20',
  TOP30 = 'top30',
}
