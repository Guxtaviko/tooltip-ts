import { tooltip } from "./main"

export const customize = (form: HTMLFormElement) => {
    form.querySelector('textarea')!.value = 'Tooltip example content'
    form.addEventListener('submit', e => e.preventDefault())
    form.addEventListener('change', () => {
        const data = new FormData(form)
        if(data.get('content') == '') return window.alert('Tooltip must have a content')
        const close = data.get('close') == 'on' ? true : false
        tooltip({
            selector: '.parent',
            trigger: data.get('trigger')!.toString(),
            position: data.get('position')!.toString(),
            title: data.get('title')!.toString(),
            content: data.get('content')!.toString(),
            close: close
        })
        updateCode(data, close)
    })
}

const updateCode = (data: FormData, close: boolean) => {
    const code = document.querySelector('.tooltip-code') as HTMLElement
    code.innerHTML = `
<span class="function">tooltip</span><span class="pontuation">({</span>
  <span class="property">selector</span><span class="operator">:</span> <span class="string">'.parent'</span><span class="pontuation">,</span>
  <span class="property">trigger</span><span class="operator">:</span> <span class="string">'${data.get('trigger')!.toString()}'</span><span class="pontuation">,</span>
  <span class="property">position</span><span class="operator">:</span> <span class="string">'${data.get('position')!.toString()}'</span><span class="pontuation">,</span>
  <span class="property">title</span><span class="operator">:</span> <span class="string">'${data.get('title')!.toString()}'</span><span class="pontuation">,</span>
  <span class="property">content</span><span class="operator">:</span> <span class="string">'${data.get('content')!.toString()}'</span><span class="pontuation">,</span>
  <span class="property">close</span><span class="operator">:</span> <span class="boolean">${close.toString()}</span>
<span class="pontuation">})</span>`
}