const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
document.querySelector("#yes").addEventListener("click", like);
document.addEventListener('DOMContentLoaded', getCat);
document.querySelector("#no").addEventListener("click", alsoYes);


Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTodo)
})

// Array.from(todoItem).forEach((el) => {
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el) => {
//     el.addEventListener('click', markIncomplete)
// })

async function deletePet() {
    const todoId = this.parentNode.dataset.id
    try {
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (err) {
        console.log(err)
    }
}

// async function markComplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// async function markIncomplete() {
//     const todoId = this.parentNode.dataset.id
//     try {
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: { 'Content-type': 'application/json' },
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     } catch (err) {
//         console.log(err)
//     }
// }

// Selecting yes shows a cat



let myHeaders = new Headers();

myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-api-key", "4ea4d1dc-8099-4cce-8b44-3eab11217882");

let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
};
async function saveit() {

}
cat = {};

// function to get random cat
function getCat() {
    fetch("https://api.thecatapi.com/v1/images/search?has_breeds=1format=json", requestOptions)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => {
            console.log(data);
            cat = data;
            document.querySelector("img").src = data[0].url;
            document.querySelector("img").width = "200";
            headText = [
                data[0].breeds[0].name,
                data[0].breeds[0].wikipedia_url,
            ];

            for (i = 0; i < 2; i++) {
                document.querySelectorAll("h3")[i].style.visibility = "visible";
                document.querySelectorAll("p")[i].innerText = headText[i];
            }
            document.querySelectorAll("p")[1].innerHTML = `
      <a href=${headText[1]}>${headText[1]}</a>`;

        })

        .catch((err) => {
            console.log(`error ${err}`);
        });
}

// function to change no button
function like() {
    async function like() {
        async (req, res) => {
            try {
                await Pet.create({ imageURL: req.body.todoItem, imageBreed: req.body.breed, like: true, userId: req.user.id })
                console.log('Pet has been added!')
                res.redirect('/choice')
            } catch (err) {
                console.log(err)
            }
        }
        getCat()
    }
}

function dislike() {
    getCat()
}

  //(document.querySelector("#no").innerText !== "Yes")
