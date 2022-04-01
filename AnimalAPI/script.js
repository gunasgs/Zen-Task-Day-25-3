// section

let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

// Heading

let h1 = document.createElement('h1')
h1.innerHTML = '<p>RANDOM DOGS</p>'
h1.classList.add('text-center','text-light')
document.getElementById('cont').appendChild(h1)


let div = document.createElement('div')
div.setAttribute('id','div')
div.classList.add('result')
document.getElementById('cont').appendChild(div)




let div3 = document.createElement('div')
div3.setAttribute('id','div3')
div3.classList.add('buttons')
document.body.appendChild(div3)



let dogBut = document.createElement('button')
dogBut.setAttribute('id','dog_button')
dogBut.setAttribute('class','btn btn-primary mt-2')
dogBut.innerHTML = "Get Dog"
dogBut.addEventListener('click',getRandomDog)
document.getElementById('div3').appendChild(dogBut)


function getRandomDog(){
fetch(`https://random.dog/woof.json`)
.then((x)=>x.json())
.then((res)=>{
	div.innerHTML = `<img id="img1" src="${res.url}"/>`
})
}