document.body.style.backgroundColor = "red";

document.body.getElementsByTagName("h1")[0].style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML += "Retz";

document.getElementById("favorites").innerHTML += "Web Design & Coding and a cup of icecream";

document.getElementById("hometown").innerHTML += "Pangasinan, Philippines";

var list = document.body.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
	list[i].className = "listitem";
}

document.head.appendChild(document.createElement("style"));
document.head.getElementsByTagName("style")[0].innerHTML += ".listitem { color: #7F0000; }";

document.body.appendChild(document.createElement("img"));
document.body.getElementsByTagName("img")[0].src = "image.jpg" ;
