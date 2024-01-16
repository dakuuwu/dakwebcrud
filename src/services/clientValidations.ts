const tagsRegex = /(?:(?:[\w]+ *[\w.]*)+[^,. ]{1})|[\w]{1}/g

export const clientPostValidations = () => {
  function imgUrlVerifier(imgUrl: string) {
    if (imgUrl.trim() === '') {
      return 'Missing Image'
    } else {
      return imgUrl
    }
  }
  function titleVerifier(title: string) {
    if (title.trim() === '') {
      return 'Untitled'
    } else {
      return title
    }
  }
  function tagsVerifier(tags: string) {
    if (tags!.trim() === '' || tags.match(tagsRegex) === null) {
      return ['Untagged']
    } else {
      return tags.match(tagsRegex)
    }
  }

  return {
    imgUrlVerifier,
    titleVerifier,
    tagsVerifier
  }
}
