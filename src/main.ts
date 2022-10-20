import { customize } from './customize'
import './style.css'

interface Tooltip {
  selector: string,
  trigger: string,
  position: string,
  title?: string,
  content: string,
  close: boolean
}

const hint = document.getElementById('hint') as HTMLElement

export const tooltip = (element: Tooltip) => {
  const parent = document.querySelector(element.selector) as HTMLElement

  if(parent.querySelector('.tooltip')) parent.querySelector('.tooltip')!.remove()

  const tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  tooltip.classList.add(element.position)

  if(element.title != undefined) tooltip.innerHTML = `<div> <h3>${element.title}</h3> ${element.content} </div>`
  else tooltip.innerHTML = `<div>${element.content}</div>`

  parent.appendChild(tooltip)
  parent.addEventListener(element.trigger, () => {
    tooltip.style.display = 'flex'
  })

  if(element.close) {
    createCloseBtn(tooltip)
  } else {
    parent.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none'
    })
  }

  if(element.trigger == 'click') hint.innerHTML = 'Click me!'
  else hint.innerHTML = 'Hover me!'
  
}

const createCloseBtn = (tooltip: HTMLElement) => {
  const closeBtn = document.createElement('span')
  closeBtn.classList.add('material-symbols-outlined', 'close-btn')
  closeBtn.innerText = 'close'

  tooltip.appendChild(closeBtn)

  closeBtn.addEventListener('click', e => {
    e.stopPropagation()
    tooltip.style.display = 'none'
  })
}

tooltip({
  selector: '.parent',
  trigger: 'click',
  position: 'top',
  title: 'Tooltip Title',
  content: 'Tooltip example content',
  close: true
})

const customizeForm = document.querySelector('.customize') as HTMLFormElement
customize(customizeForm)

// const tooltipCode = document.querySelector('.tooltip-code') as HTMLElement
// tooltipCode.innerHTML = `
// tooltip({
//   selector: '.parent',
//   trigger: 'click',
//   position: 'top',
//   title: 'Tooltip Title',
//   content: 'Tooltip example content',
//   close: true
// })`