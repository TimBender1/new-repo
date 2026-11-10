
document.body.style.backgroundColor = "lightyellow";

const box = document.createElement("dialog");
box.innerHTML = `<p>Welcome!</p><form method="dialog"><button>OK</button></form>`;
document.body.appendChild(box);
box.showModal();
