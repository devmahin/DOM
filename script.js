const section = document.getElementsByTagName("section");
const section2 = document.getElementsByTagName("section")[1];
    let attSet = section2.setAttribute("class", "section2")
    let att = section2.getAttribute("class")

    console.log(att)

for(let sec of section){
    // console.log(sec)
    sec.style.border = "2px solid red";
    sec.style.padding = "20px";
    sec.style.margin = "20px";
    sec.style.backgroundColor = "orange";
}