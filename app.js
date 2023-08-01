const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {

    const div = document.createElement('div')
    const text = document.createElement('h3')
    const divButtons = document.createElement('div')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    if(input.value===''){
        alert('заполните текст')
    }else {
        div.setAttribute('class', 'block_text')
        divButtons.setAttribute('class', 'div_buttons')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')

        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'

        deleteButton.onclick = () => div.remove()

        editButton.onclick = () => {
            const editText = prompt(`EDIT ${text.innerHTML}`).trim()
            editText === '' ? alert('нельзя менять на пустоту'): text.innerHTML = editText
        }

        text.innerHTML = input.value
        divButtons.append(deleteButton, editButton)
        div.append(text, divButtons)
        todoList.prepend(div)
        text.onclick=()=>{
            text.classList.toggle('line')
        }

        input.value = ''
    }

}

createButton.onclick = () => createTodo()
// window.addEventListener('keydown', (event) =>{
//     if(event.code === 'Enter'){
//         createTodo()
//     }
// })

window.onkeydown = (event) => {
    // console.log(event.keyCode)
    if (event.keyCode === 13) {
        createTodo()
    }
}