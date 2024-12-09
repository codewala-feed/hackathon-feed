const hTags = document.getElementsByTagName("h1");
const childClass = document.getElementsByClassName("hero-div"); 
for (let i = 0; i < hTags.length; i++) { //for every h1 tag
    const element = hTags[i];
    element.addEventListener("mouseover", function(){
            const cdiv = childClass[i-1];
            cdiv.style.backgroundColor = "rgba(187, 178, 178, 0.536)";
    })
    element.addEventListener("mouseleave", function(){
            const cdiv = childClass[i-1];
            cdiv.style.backgroundColor = "";
    })
}