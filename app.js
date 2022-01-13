const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

// generate joke
generateJoke();


//  USING ASYNC/AWAIT
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch(' https://icanhazdadjoke.com', config);
    const data = await res.json();
    data.innerHTML = data.joke;
}


// USING .then()

// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch(' https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//         // console.log('data is ', data);
//         jokeElement.innerHTML = data.joke;
//     }
//     )
// }