const listForm = document.querySelector('#listForm')
let x = 0
let listArray = []


function renderItem(item) {
    const newItem = document.createElement('li')
    newItem.innerHTML = `${item}`

    return newItem
}

function renderList(item) {
    const list = document.createElement('ul')

    for (let i = 0; i < listArray.length; i++) {
        list.appendChild(renderItem(listArray[i]))
    }
    return list
}


function handleSubmit(ev) {
    ev.preventDefault()
    
    const listItem = ev.target
    
    if(x == 1) {
    const k = document.querySelector('ul')
    k.remove() 
    }

    listArray.unshift(listItem.formListItem.value)

    listForm.appendChild(renderList(listItem.formListItem.value))

    //itemForm.appendChild(renderItem(listItem.groceryItem.value))
    listItem.reset()
    x = 1
}

listForm.addEventListener('submit', handleSubmit)
