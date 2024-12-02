export function setMetaTags(data) {
  const metaDesc = document.querySelector('head meta[name="description"]')
  const tagTitle = document.querySelector('head title')

  if (data.description) {
    metaDesc.setAttribute('content', data.description)
  }
  if (data.title) {
    tagTitle.textContent = data.title
  }
}
export default { setMetaTags }
