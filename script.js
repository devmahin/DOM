// const section = document.getElementsByTagName("section");
// const section2 = document.getElementsByTagName("section")[1];
//     let attSet = section2.setAttribute("class", "section2 hasan")
//     let add = section2.classList.add("hasan2")
//     let remove = section2.classList.remove("hasan2")
//     let att = section2.getAttribute("class")

//     // console.log(att)

// for(let sec of section){
//     // console.log(sec)
//     sec.style.border = "2px solid red";
//     sec.style.padding = "20px";
//     sec.style.margin = "20px";
//     sec.style.backgroundColor = "orange";
// }

// const section3 = document.getElementById("section2")
// section3.setAttribute("class" , "section33 inp")
// section3.classList.add("bg-yellow")

// let content = document.querySelector('#hello ul');
// let newli = document.createElement("li")
//     newli.innerText = "Hello"
//     content.append(newli)
// // let firstChild = content
// console.log(content.parentElement.parentElement)
// // const li = content




const main = document.getElementById("appen")
// console.log(main.)
let sec = document.createElement("section")
    main.append(sec)

// let ulsec = document.createElement("ul")
//     sec.append(ulsec)

// let li1 = document.createElement("li")
// li1.innerText = "I am comming li1"
// ulsec.append(li1)
// let li2 = document.createElement("li")
// li2.innerText = "I am comming li2"
// ulsec.append(li2)

// let li3 = document.createElement("li")
// li3.innerText = "I am comming li3"
// ulsec.append(li3)

// let li4 = document.createElement("li")
// li4.innerText = "I am comming li4"
// ulsec.append(li4)



sec.innerHTML = `
    <ul>
        <li>first element 1</li>
        <li>second element 2</li>
        <li>third element 3</li>
        <li>forth element 4</li>
    </ul>
`