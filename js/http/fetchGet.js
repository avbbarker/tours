


fetch("http://localhost:3000/langs")
    .then(response => { 
        console.log("response object:")
        console.log(response)
    })

fetch("http://localhost:3000/langs")
    .then(response => {
        console.log("JSON promise:")
        console.log(response.json())
    })

fetch("http://localhost:3000/langs")
    .then(response => 5)
    .then(randomName => console.log(randomName))

function addLang(Lang){
    console.log(lang)
    const p = document.createElement('p')
    const container = document.querySelector('#')
    p.innerText = lang.name
    p.addEventListener('click', (e)=>{
        e.target.style.color = 'red'
    })
    container.appendChild(p)   
}

fetch("http://localhost:3000/langs")
.then(response => response.json())
.then(langs => langs.forEach(lang => addLang(Lang)))
.catch(error => console.log(`printing the error: ${error}`))


console.log("This runs before the fetch")

fetch("https://www.dnd5eapi.co/api/spells/silence")
.then(response => response.json())
.then(json => console.log(json))
