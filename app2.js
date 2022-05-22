function firstAction() {
    console.log('Im the first action')
}

function secondAction() {
    console.log('Im the second action')
}

// firstAction()
setTimeout(firstAction, 5000)
secondAction()

