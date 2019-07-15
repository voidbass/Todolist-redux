export function deleteItem(name){
    return {
        type: "DELETE",
        index: name
    }
}

export function saveEdit(index, name, content, date){
    return {
        type: "EDIT",
        index: index,
        name: name,
        content: content,
        date: date
    }
}

export function searchItem(name){
    return {
        type: "SEARCH",
        name: name
    }
}

export function addItem(name, content, date){
    return {
        type: "ADD",
        name: name,
        content: content,
        date: date
    }
}