const section = document.getElementsByTagName("section");
const section2 = document.getElementsByTagName("section")[1];
    let attSet = section2.setAttribute("class", "section2 hasan")
    let add = section2.classList.add("hasan2")
    let remove = section2.classList.remove("hasan2")
    let att = section2.getAttribute("class")

    // console.log(att)

for(let sec of section){
    // console.log(sec)
    sec.style.border = "2px solid red";
    sec.style.padding = "20px";
    sec.style.margin = "20px";
    sec.style.backgroundColor = "orange";
}

const section3 = document.getElementById("section2")
section3.setAttribute("class" , "section33 inp")
section3.classList.add("bg-yellow")
