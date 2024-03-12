document.querySelector("#image-0").addEventListener("click", function () {
    document.querySelector("#image-0").style.visibility = "hidden";
    alert("Enter the Knight Mansion")
    document.querySelector("#image-1").style.visibility = "visible";
})

document.querySelector("#image-1").addEventListener("click", function () {
    document.querySelector("#text-1").style.display = "block"; // Show text
})


document.querySelector("#text-1").addEventListener("click", function () {
    document.querySelector("#text-1").style.visibility = "hidden";
    document.querySelector("#image-1").style.visibility = "hidden";
    document.querySelector("#image-2").style.visibility = "visible";
})
document.querySelector("#image-2").addEventListener("click", function () {
    document.querySelector("#text-2").style.display = "block"; // Show text
})
document.querySelector("#text-2").addEventListener("click", function () {
    document.querySelector("#text-2").style.visibility = "hidden";
    document.querySelector("#image-2").style.visibility = "hidden";
    document.querySelector("#image-3").style.visibility = "visible";
})
document.querySelector("#image-3").addEventListener("click", function () {
    document.querySelector("#text-3").style.display = "block"; // Show text
})
document.querySelector("#text-3").addEventListener("click", function () {
    document.querySelector("#text-3").style.visibility = "hidden";
    document.querySelector("#image-3").style.visibility = "hidden";
    document.querySelector("#image-4").style.visibility = "visible";
})

document.querySelector("#image-4").addEventListener("click", function () {
    document.querySelector("#text-4").style.display = "block";
})

document.querySelector("#text-4").addEventListener("click", function () {
    document.querySelector("#text-4").style.visibility = "hidden";
    document.querySelector("#image-4").style.visibility = "hidden";
    document.querySelector("#image-5").style.visibility = "visible";
})

document.querySelector("#image-5").addEventListener("click", function () {
    document.querySelector("#text-5").style.display = "block";
})

document.querySelector("#text-5").addEventListener("click", function () {
    document.querySelector("#text-5").style.visibility = "hidden";
    document.querySelector("#image-5").style.visibility = "hidden";
    document.querySelector("#image-6").style.visibility = "visible";
})

document.querySelector("#image-6").addEventListener("click", function () {
    document.querySelector("#text-6").style.display = "block";
})

document.querySelector("#text-6").addEventListener("click", function () {
    document.querySelector("#text-6").style.visibility = "hidden";
    document.querySelector("#image-6").style.visibility = "hidden";
    window.location.href = "evidence.html";
})
