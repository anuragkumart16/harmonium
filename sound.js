document.addEventListener('keydown',(event)=>{
    const keyName = event.key
    // Mandra Saptak Lower Keys Sargam
    if (keyName == 'z'){
        const item = document.getElementById('z-key')
        item.play()
    }
    if (keyName == 'x'){
        const item = document.getElementById('x-key')
        item.play()
    }
    if (keyName == 'c'){
        const item = document.getElementById('c-key')
        item.play()
    }
    if (keyName == 'v'){
        const item = document.getElementById('v-key')
        item.play()
    }
    if (keyName == 'b'){
        const item = document.getElementById('b-key')
        item.play()
    }
    if (keyName == 'n'){
        console.log('N')
        const item = document.getElementById('n-key')
        item.play()
    }
    if (keyName == 'm'){
        const item = document.getElementById('m-key')
        item.play()
    }
    if (keyName == ','){
        const item = document.getElementById(',-key')
        item.play()
    }
    // Mandra Saptak Upper keys
    if (keyName == 's'){
        const item = document.getElementById('s-key')
        item.play()
    }
    if (keyName == 'd'){
        const item = document.getElementById('d-key')
        item.play()
    }
    if (keyName == 'g'){
        const item = document.getElementById('g-key')
        item.play()
    }
    if (keyName == 'h'){
        const item = document.getElementById('h-key')
        item.play()
    }
    if (keyName == 'j'){
        const item = document.getElementById('j-key')
        item.play()
    }
    // madhya saptak lower keys
    if (keyName == '.'){
        const item = document.getElementById('fullstop-key')
        item.play()
    }

})

document.addEventListener('keyup',(event)=>{
    const keyName = event.key
    // Mandra Saptak Lower Keys Sargam
    if(keyName == 'z'){
        const item = document.getElementById('z-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'x'){
        const item = document.getElementById('x-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'c'){
        const item = document.getElementById('c-key')
        item.pause()
        item.currentTime = 0
    }
    if(keyName == 'v'){
        const item = document.getElementById('v-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'b'){
        const item = document.getElementById('b-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'n'){
        const item = document.getElementById('n-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'm'){
        const item = document.getElementById('m-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == ','){
        const item = document.getElementById(',-key')
        item.pause()
        item.currentTime = 1
    }
    // Mandra Saptak Upper keys
    if(keyName == 's'){
        const item = document.getElementById('s-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'd'){
        const item = document.getElementById('d-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'g'){
        const item = document.getElementById('g-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'h'){
        const item = document.getElementById('h-key')
        item.pause()
        item.currentTime = 1
    }
    if(keyName == 'j'){
        const item = document.getElementById('j-key')
        item.pause()
        item.currentTime = 1
    }
    // madhya lower keys
    if(keyName == '.'){
        const item = document.getElementById('fullstop-key')
        item.pause()
        item.currentTime = 1
    }
})