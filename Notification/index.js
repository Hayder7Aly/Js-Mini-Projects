const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
    'Message Five'
]

const types = ['success','error','info']

button.addEventListener('click' , ()=>{
    createNottification();
})

function createNottification(message = null,  type = null){
    const notify = document.createElement('div');
    notify.classList.add('toast')
    notify.classList.add(type ? type : getRandomTypes());
    notify.innerText = message ? message : getRondomMessage()
    toasts.appendChild(notify)

    
    setTimeout(() => {
       notify.remove() 
    }, 2500);


}


function getRondomMessage(){
    return  messages[Math.floor(Math.random() * messages.length)]
}
function getRandomTypes(){
    return  types[Math.floor(Math.random() * messages.length)]
}