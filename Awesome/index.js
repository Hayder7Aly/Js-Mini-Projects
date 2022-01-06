const mainContainer = document.querySelector('.main-container')

let internal = 500;
function getFontAwesomeCode(){
    internal++;
    return  `&#xf${internal}`      
}

function getRandomColor(){
    let color = ''
    for(let i = 0 ;i<3;i++){
        color += Math.floor(Math.random() * 250) + ','
    }
    return color
}



function generateFontAwesome(){
    for(let i = 0 ; i<99;i++){
        let code = getFontAwesomeCode()
        const box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = `
        <span class="placement fa" style="color:rgba(${getRandomColor()}1) ">${code}</span>
            
        `
        mainContainer.appendChild(box)
    }
}

generateFontAwesome()




