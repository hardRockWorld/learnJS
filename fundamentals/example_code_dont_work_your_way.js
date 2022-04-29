// This example code doesn't work the way you think it does:
// this example is having 2 functions which describe the problem and other gives the solution
function prblm() {
    const hey = 'hey'
    const you = 'you'
    const heyYou = hey + ' ' + you

    ['h', 'e', 'y'].forEach((letter) => console.log(letter))
}

function sol() {
    const hey = 'hey'
    const you = 'you'
    const heyYou = hey + ' ' + you; // here is the solution, put a ';' at the end of this declarations

    ['h', 'e', 'y'].forEach((letter) => console.log(letter))
}

const choice = prompt('Please choose any of the option: 1 or 2 ?')
if(choice == '1') {
    prblm()
} else if(choice == '2') {
    sol()
} else {
    console.log('Please choose a valid option.. ')
}