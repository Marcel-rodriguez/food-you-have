// WE GOT THIS

const form = document.getElementById('form1')
const displayTags = document.getElementById('displayTags')
const input = document.getElementById('a')
const submitButton = document.querySelector('.submitButton')

form.onsubmit=function(nosubmit){
    nosubmit.preventDefault();
}

document.addEventListener("keydown", function(e){
    if(e.key === "Enter" || e.key === ","){
        addTag()
        createTag()
        input.value = ''
    } else if(input.value === '' && e.key === 'Backspace'){
        deleteLastTag()
    }
})

const tagArray = []

function addTag(){
    tagArray.push(input.value)
    console.log(tagArray)
}

function createTag(){
   let newP = document.createElement('p')
   newP.className = 'tag'
   newP.id = input.value

   let newTag = document.createTextNode(tagArray[tagArray.length - 1])
   newP.appendChild(newTag);

   let newPI = document.createElement('i')
   newPI.className = 'material-icons'
   newPI.id = "tagI"

   let newPITag = document.createTextNode('close')

   newPI.appendChild(newPITag)
   newP.appendChild(newPI)

   
   displayTags.appendChild(newP)
}

function deleteLastTag(){
    tagArray.pop()
    displayTags.removeChild(displayTags.lastChild)
    console.log(tagArray)
}