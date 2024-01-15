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
    if (tags!.trim() === '') {
      return ['Untagged']
    } else {
      return tags.split(',')
    }
  }

  return {
    imgUrlVerifier,
    titleVerifier,
    tagsVerifier
  }
}
