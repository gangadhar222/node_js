// process.stdout is a writable string
// process.stdout.write("Hello \n")

const questions = [
    "what is your name?",
    "What do you do?",
    "What is your favourite programming language?"
]

const ask = (i=0)=>{
    process.stdout.write(`\n ${questions[i]} \n`)  
    process.stdout.write("ans: ")
}

ask()
const answers = []
// on function listen for events
// even name below is data event
// on function accepts event and a callback
process.stdin.on("data",data=>{
    answers.push(data.toString().trim())
    if(answers.length<questions.length){
        ask(answers.length)
    }
    else{
        process.exit()
    }
})