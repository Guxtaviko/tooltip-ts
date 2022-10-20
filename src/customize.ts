import { tooltip } from "./main"

export const customize = (form: HTMLFormElement) => {
    form.querySelector('textarea')!.value = 'Tooltip example content'
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
    })
}
