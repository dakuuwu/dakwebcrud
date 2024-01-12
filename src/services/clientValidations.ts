export const clientValidations = () => {
  function imgUrlVerifier(imgUrl: String) {
    if (imgUrl.trim() === '') {
      return 'Missing Image'
    } else {
      return imgUrl
    }
  }
  function titleVerifier(title: String) {
    if (title.trim() === '') {
      return 'Untitled'
    } else {
      return title
    }
  }
  function tagsVerifier(tags: String) {
    if (tags.trim() === '') {
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
