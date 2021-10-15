// Asynchronous programmig
// Synchronous programming?
// - run line at a time
// - each one takes time
// - if you have something that takes a lot of time,
//   everything after it gets delayed
//   -- that's "blocking" code


alert("cat paused") // THIS is a perfect example of "blocking" code

const timeBeforeRequest = Date.now()

const todosList = document.querySelector("ul#todos")
function displayOnPage (todos) {
    todos.forEach(todo => {
        const todoListItem = document.createElement("li")
        let todoTitle = ""
        if (todo.completed === true) {
            todoTitle += `✔ ${todo.title}`
        } else {
            todoTitle += `❌ ${todo.title}`
        }
        todoListItem.append(todoTitle)
        todosList.append(todoListItem)
    })
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
      displayOnPage(data)
  })

// setTimeout(() => displayOnPage(todos), 3000) // race condition

fetch("https://shrouded-mountain-15003.herokuapp.com/https://api.domainsdb.info/v1/info/stat/")
  .then(response => response.json())
  .then(statistics => console.log(statistics))

// window.setInterval(() => console.log("haha do this again"), 2000)
window.setTimeout(() => console.log("A. Waited 5000 milliseconds"), 5000)
window.setTimeout(() => console.log("B. Waited 1000 milliseconds"), 1000)
window.setTimeout(() => console.log("C. Waited 10000 milliseconds"), 10000)
window.setTimeout(() => console.log("D. Waited 1 millisecond"), 1)
window.setTimeout(() => console.log("E. Waited 0 milliseconds"), 0)
document.addEventListener("keydown", event => console.log("you pressed a key:", event.key))

console.log("When does this run?")