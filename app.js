const button = document.querySelector('button')

//function toggle() {
//    button.classList.toggle('altColor')
//}

//toggle()

//button.addEventListener('click', toggle)
// without parenthesis it is a callback function

//next is anonamous function, if you take out "function" from it its called arrow funcuntion?
// like just ()
button.addEventListener('click', function () {
    button.classList.toggle('altColor')
})

button.addEventListener('click', () => {
    button.classList.toggle('altColor')
})


// toggle is equal to ()=>{}    -- this toggle is called callback fuction
// toggle() is not equal to ()=>{} -- this toggle() function will be called immediately


