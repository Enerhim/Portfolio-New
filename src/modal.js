var modal = document.getElementById("modal");
var modalContent = document.getElementsByClassName("modal-internal")[0];
var span = document.getElementsByClassName("close-modal")[0];

projectData = [
    "TEST"
]

function openModal(name, data) {
    modal.style.display = "block";
    modalContent.innerHTML = `<h1> ${name} </h1> <br/> ${projectData[data - 1]}`
}


span.onclick = function() {
    modal.style.display = "none";
}