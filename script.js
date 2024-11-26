function Clicked(elementId){
    document.getElementById(elementId).classList.add('clicked');
    setTimeout(()=>{
        document.getElementById(elementId).classList.remove('clicked');
    },200);
}

function handleKeyPress(keyName){
    Clicked(keyName)
}

// const whitekeys = document.querySelectorAll('.white-key');
// whitekeys.forEach((item)=>{item.addEventListener('click',()=>{
//     item.classList.add('clicked')
//     setTimeout(()=>{
//         item.classList.remove('clicked')
//     },200)
// })})

// const blackkeys = document.querySelectorAll('.black-key');
// blackkeys.forEach((item)=>{
//     item.addEventListener('click',()=>{
//         item.classList.add('clicked')
//         setTimeout(()=>{
//             item.classList.remove('clicked')
//         },200)
//     })
// })

document.addEventListener('keydown',(event)=>{
    const keyName = event.key;
    handleKeyPress(keyName);
})

