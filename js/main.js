let inputbox = document.getElementById('taskText')
let tasksContainer = document.getElementById('tasksContainer')

function addTask() {
    if(inputbox.value === ''){
        alert('Пустую задачу создать, увы, нельзя!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputbox.value
        tasksContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputbox.value = ''
    saveData()
}

tasksContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

function saveData() {
    localStorage.setItem('data', tasksContainer.innerHTML)
}

function showTask() {
    tasksContainer.innerHTML = localStorage.getItem('data')
}

showTask()