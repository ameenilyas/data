// // DOM PART 1

// console.log("Hello World")

// console.log(document.domain)
// console.log(document.URL)
// document.title = "123"
// console.log(document.all)
// // document.all[9].textContent = "Hello World"
 
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)


// console.log(document.querySelector("#heading"))
// var hello = document.querySelector("#heading").innerHTML = "Hello Master"
// console.log(hello)

// var item = document.querySelectorAll(".item")

// console.log(item.length)
// item[0].style.backgroundColor = "yellow"

// for(i = 0; i < item.length; i++){
//     item[i].style.backgroundColor = "yellow"
// }

// item.forEach(target =>{
//     target.style.fontWeight = "700";color = "blue"
// })







// DOM PART 2

// parentNode (simply selects the parent element)
// parentElement (simply selects the parent element)

// var element = document.querySelector(".heading")
// element.parentNode.style.backgroundColor = "#f4f4f4"


// // childNodes (simply selects the child element)
// // childeren (simply selects the child element)

// // firstChild (simply selects first the child element)
// // lastChild (simply selects last the child element)

// // nextSibling (simply Selects the next sibling)
// // previousSibling (simply Selects the previous sibling)


// var tag = document.querySelector(".ul")

// // tag.children[1].style.color = "blue"

// var newDiv = document.createElement("div")
// console.log(newDiv)

// newDiv.className = "div"

// newDiv.id = "div"

// newDiv.setAttribute("title","Hello World")

// var content = document.createTextNode("Hello World")

// newDiv.appendChild(content)

// var cont = document.querySelector(' header')
// var h1 = document.querySelector('header #heading')

// console.log(newDiv)
// console.log(cont)
// console.log(h1)

// cont.insertBefore(newDiv,h1)

// newDiv.style.fontSize = '24px'



// DOM PART 3
// EVENTS

var cont = document.querySelector(".container") 
var btn = document.querySelector("button").addEventListener("click",() =>{
    cont.style.backgroundColor = "lime"
    console.log(123)
})

var btn = document.querySelector(".button").addEventListener("click",buttonClick)


function buttonClick(e){
    cont.style.backgroundColor = "#fff"
    console.log("321")
    console.log(e)
    console.log(e.target)
    console.log(e.target.className)
    var a =  document.querySelector("#output")
    console.log(a)
    a.innerHTML = '<h1>' + e.target.className + '</h1>'
    console.log(e.type)

    // console.log(e.clientX)  Window Element
    // console.log(e.clientY) Window Element

    // console.log(e.offsetX)  element of body
    // console.log(e.offsetY)  element of body
    
    console.log(e.altKey)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)
}


const tabnine = e =>{
    console.log(e.target.innerHTML)
    const add = document.querySelector("#output")
    add.innerHTML = '<h1>' + e.target.className + "</h1>"
    console.log(e.clientY)
    console.log(e.offsetY)
    console.log(e.ctrlKey)
    console.log(e.altKey)
    console.log(e.shiftKey)
}

const tabNine = document.querySelector(".click-me").addEventListener("click",tabnine)




const box = document.getElementById("box")
box.style.background = "red";

// box.addEventListener("mouseover",() => console.log("MouseOver"))
// box.addEventListener("mouseenter",() => console.log("MouseEnter"))


box.addEventListener("mouseout",() => console.log("MouseOut"))
box.addEventListener("mouseleave",() => console.log("Mouseleave"))
box.addEventListener("mousemove",outside)
box.addEventListener("mousemove",outside)


function outside(e){
    const output = document.getElementById("output")
    console.log("Event Type", e.type)
    output.innerHTML = '<h1> OffsetX:' + e.offsetX + '</h1>' + '<h1> OffsetY:' + e.offsetY + '</h1>'
    box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + "," +"40 )"
    document.body.style.backgroundColor = "rgba(" + e.offsetX + "," + e.offsetY + "," + e.offsetX + "," +"210 )"
}





var input = document.querySelector('input[type = "text"]')
// input.addEventListener("keydown",event)
// input.addEventListener("keyup",event)
// input.addEventListener("keypress",event)
// input.addEventListener("blur",event)
// input.addEventListener("focus",event)
// input.addEventListener("cut",event)
// input.addEventListener("input",event)
// input.addEventListener("focus",event)
input.addEventListener("change",event)



var form = document.querySelector("form")
form.addEventListener("submit",event)

function event(e){
    e.preventDefault()
    console.log("Event Type:",e.type)
    console.log("Event Type:",e.target.value)
    // e.target.value = null
    output.innerHTML = '<h1>'+ e.target.value +'</h1>'
}
