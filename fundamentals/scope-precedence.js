//  this prints undefined:
var name = 'Roger'

function run() {
    console.log(name)
    var name = 'Rama'
}

run()

// this raises an error called ReferenceError: cannot access 'nama' before initialization
let nama = 'Roger'

function run() {
    console.log(nama)
    let nama = 'Krishna'
}

run()