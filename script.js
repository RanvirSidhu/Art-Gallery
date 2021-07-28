var file=document.querySelector(".gallery");
var output=document.querySelector("img");
var g=document.querySelector(".grid");
var delbuts=document.querySelectorAll(".DelButton");

function del(event) {
    event.target.parentElement.remove();
}

function addevents() {
    for(var i=0;i<delbuts.length;++i)
    {
        delbuts[i].addEventListener("click",del);
    }
}

var loadFile = function(event) {
    var di=document.createElement("div");
    g.appendChild(di);
    var img=document.createElement("img");
    var but=document.createElement("button");;
    di.appendChild(img);
    var link=URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0].name);
    img.src=link; 
    img.alt=event.target.files[0].name;
    di.appendChild(but);
    but.textContent="Delete";
    but.classList="DelButton";
    delbuts=document.querySelectorAll(".DelButton");
    addevents();
}



file.addEventListener("input",loadFile);