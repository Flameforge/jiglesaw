import Main from '../../main'
import { getImage, setImage } from './image-section'

export default class UrlInput {
  input: HTMLInputElement
  public constructor() {
    this.input = document.createElement('input')
  }
  public start(container: HTMLElement | null) {
    if (!container) throw new Error('no container')

    const image = getImage()

    const label = document.createElement('label')
    label.textContent = `Choose an image`
    label.setAttribute('for', 'image-url')
    container.appendChild(label)

    const input = this.input
    input.id = 'image-url'
    input.type = 'url'
    input.setAttribute('placeholder', image)
    input.value = image
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setImage(input.value)
      }
    })
    container.appendChild(input)
  }
}