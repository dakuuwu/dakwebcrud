export interface Post {
  id: string
  content: {
    title: string
    imageurl: string
    shortdesc: string
    longdesc: string
  }
  tags: string | string[]
}

export interface DesctructuredPost {
  id: string
  title: string
  imageurl: string
  shortdesc: string
  longdesc: string
  tags: string
}

export interface Content {
  content: {
    title: string
    imageurl: string
    shortdesc: string
    longdesc: string
  }
}

export interface TaggedContent {
  content: {
    title: string
    imageurl: string
    shortdesc: string
    longdesc: string
  }
  tags: string | string[]
}

export interface DesctructuredTaggedContent {
  title: string
  imageurl: string
  shortdesc: string
  longdesc: string
  tags: string | string[]
}
