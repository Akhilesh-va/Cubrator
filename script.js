let cursor=document.querySelector("#cursor");
let main =document.querySelector("#main")
main.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
})

let overlay1= document.querySelector("#overlay1")
overlay1.addEventListener("mousemove",function(dets){
    document.querySelector("#element1 img").style.scale=0.5
    document.querySelector("#element1 img").style.opacity=1
    cursor.style.opacity=0
    document.querySelector("#element1 img").style.left = (dets.x-280)+"px"
    document.querySelector("#element1 img").style.top = (dets.y-280)+"px"

})


let overlay1_1= document.querySelector("#overlay1")
overlay1_1.addEventListener("mouseleave",function(dets){
    document.querySelector("#element1 img").style.scale=0
    document.querySelector("#element1 img").style.opacity=0
    cursor.style.opacity=1

})



// -----------------------------------------------------------------


let overlay2= document.querySelector("#overlay2")
overlay2.addEventListener("mousemove",function(dets){
    document.querySelector("#element2 img").style.scale=0.5
    document.querySelector("#element2 img").style.opacity=1
    cursor.style.opacity=0
    document.querySelector("#element2 img").style.left = (dets.x-670)+"px"
    document.querySelector("#element2 img").style.top = (dets.y-280)+"px"

})


let overlay2_1= document.querySelector("#overlay2")
overlay2_1.addEventListener("mouseleave",function(dets){
    document.querySelector("#element2 img").style.scale=0
    document.querySelector("#element2 img").style.opacity=0
    cursor.style.opacity=1

})


// ------------------------------------------------------------------

let overlay3= document.querySelector("#overlay3")
overlay3.addEventListener("mousemove",function(dets){
    document.querySelector("#element3 img").style.scale=0.5
    document.querySelector("#element3 img").style.opacity=1
    cursor.style.opacity=0
    document.querySelector("#element3 img").style.left = (dets.x-1050)+"px"
    document.querySelector("#element3 img").style.top = (dets.y-280)+"px"

})


let overlay3_1= document.querySelector("#overlay3")
overlay3_1.addEventListener("mouseleave",function(dets){
    document.querySelector("#element3 img").style.scale=0
    document.querySelector("#element3 img").style.opacity=0
    cursor.style.opacity=1

})