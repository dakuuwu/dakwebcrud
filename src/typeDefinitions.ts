export interface Post {
  id: string
  content: {
    title: string
    imageUrl: string
    toUrl?: string
    shortDesc: string
    longDesc?: string
  }
  tags: string | string[]
}

export interface DesctructuredPost {
  id: string
  title: string
  imageUrl: string
  toUrl?: string
  shortDesc: string
  longDesc?: string
  tags: string
}

export interface Content {
  content: {
    title: string
    imageUrl: string
    toUrl?: string
    shortDesc: string
    longDesc?: string
  }
}

export interface TaggedContent {
  content: {
    title: string
    imageUrl: string
    toUrl?: string
    shortDesc: string
    longDesc?: string
  }
  tags: string | string[]
}

export interface DesctructuredTaggedContent {
  title: string
  imageUrl: string
  toUrl?: string
  shortDesc: string
  longDesc?: string
  tags: string | string[]
}
