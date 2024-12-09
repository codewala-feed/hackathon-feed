const hTags = document.getElementsByTagName("h1");
const childClass = document.getElementsByClassName("hero-div"); 
for (let i = 0; i < hTags.length; i++) { //for every h1 tag
    const element = hTags[i];
    element.addEventListener("mouseover", function(){
        for (let j = 0; j < childClass.length; j++) { //for every hero-div
            const cdiv = childClass[j];
            cdiv.style.backgroundColor = "rgba(187, 178, 178, 0.536)";
        }
    })
    element.addEventListener("mouseleave", function(){
        for (let j = 0; j < childClass.length; j++) {
            const cdiv = childClass[j];
            cdiv.style.backgroundColor = "";
        }
    })
}