const text = document.querySelectorAll(".thePaths");
//console.log(text[0].getTotalLength());

for( i=0; i<text.length; i++){
    console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}


const lastword = document.querySelector("#eighteenth");
console.log(lastword);

const animation = document.querySelector("div.animation");
lastword.addEventListener( "animationend", ()=> {
    animation.style = "trasition: all 1s ease;  opacity:0; pointer-events:none;";
} )