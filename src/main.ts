import './style.css'

interface Tooltip {
  selector: string,
  trigger: string,
  position: string,
  title: string,
  content: string,
  close: boolean
}

const tooltip = (element: Tooltip) => {
  const tooltip = document.createElement('div')
  tooltip.classList.add('tooltip')
  tooltip.classList.add(element.position)

  tooltip.innerHTML = `<div>
    <h3>${element.title}</h3> 
    ${element.content}
  </div>`

  const parent = document.querySelector(element.selector) as HTMLElement
  parent.appendChild(tooltip)
  parent.addEventListener(element.trigger, () => {
    tooltip.style.display = 'flex'
  })

  if(element.close) {
    const closeBtn = document.createElement('span')
    closeBtn.classList.add('material-symbols-outlined', 'close-btn')
    closeBtn.innerText = 'close'

    tooltip.appendChild(closeBtn)

    closeBtn.addEventListener('click', e => {
      e.stopPropagation()
      tooltip.style.display = 'none'
    })
  } else {
    parent.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none'
    })
  }
  
}


tooltip({
  selector: 'main',
  trigger: 'click',
  position: 'right',
  title: 'Tooltip Title',
  content: 'Tooltip example content',
  close: true
})