const listForm = document.querySelector('#listForm')

let listArray = []


function renderItem(item) {
    const newItem = document.createElement('li')

    const noSpace = item.replace(/\s/g, '');

    newItem.innerHTML = `${item}`
   
    const promoteButton = document.createElement('button')
    promoteButton.setAttribute('type', 'button')
    promoteButton.setAttribute(`id`, `${noSpace}`)
    promoteButton.textContent = 'Promote'
    newItem.appendChild(promoteButton)

    promoteButton.addEventListener('click', handlePromote)

    return newItem
}

function renderList(item) {
    const list = document.createElement('ul')

    for (let i = 0; i < listArray.length; i++) {
        list.appendChild(renderItem(listArray[i]))
    }
    return list
}

    function validateNewItem(value) {
        for (let i = 0; i < listArray.length; i++) {
            if (listArray[i] == value) {
                alert('Sorry! This list needs a different item! - Try Again')
                return false
            }
        }
        return true
    }


function handleSubmit(ev) {
    ev.preventDefault()
    const listItem = ev.target

    //Check for if item in list
    if (validateNewItem(listItem.formListItem.value) == false) {
        return false
    }
    
    if(listArray.length > 0) {
    const k = document.querySelector('ul')
    k.remove() 
    }

    listArray.unshift(listItem.formListItem.value)
    listForm.appendChild(renderList(listItem.formListItem.value))
    listItem.reset()

}
function handlePromote(ev) {
    ev.preventDefault()

    const background = document.querySelector(`#${e.target.id}`)
    const parent = background.parentElement

    if (parent.style.backgroundColor == 'lightblue') {
        parent.style.backgroundColor = 'whitesmoke'}
    else {
        parent.style.backgroundColor = 'lightblue'
    }
}

listForm.addEventListener('submit', handleSubmit)
