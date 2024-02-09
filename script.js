const section = document.getElementsByTagName("section");
const section2 = document.getElementsByTagName("section")[1];
console.log(section2)

for(let sec of section){
    console.log(sec)
    sec.style.border = "2px solid red";
    sec.style.padding = "20px";
    sec.style.margin = "20px";
    sec.style.backgroundColor = "orange";
}