/* Demo Başlancıç   --  sonra silinecek */

document.getElementById("ekle").onclick = () => {
    for (let i = 0; i < 100; i++) {
        document.getElementById("liste").innerHTML += `<button type="button" class="list-group-item list-group-item-action"> Not ${i + 5}</button>`;
    }
};

/* Demo Bitiş   --  sonra silinecek */

const divMenu = document.getElementById("menu");
const divSideBarColumn = document.getElementById("sideBarColumn");
const divOffCanvasBody = document.getElementById("offcanvasBody");
const divOffCanvas = new bootstrap.OffCanvas("#offcanvasExample");

window.onresize =
    function menuAyarla() {
        if (window.innerWidth < 576) {
            document.body.style.background = "pink";
        } else {
            document.body.style.background = "yellow";
            divOffCanvas.hide();
        }
    };
window.onresize = menuAyarla;
menuAyarla();