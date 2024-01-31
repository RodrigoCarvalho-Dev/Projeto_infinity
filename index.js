"use strict";
function link() {
    const url = "https://infinityschool.com.br/";
    Swal.fire({
        title: "Você está sendo redireciodo",
        text: "Aguarde",
        imageUrl: "https://cdn.eadplataforma.app/client/infinityschool/upload/others/e993f6d822d15efdb3585d1b733e4020.png",
        imageWidth: 400,
        imageHeight: 100,
        imageAlt: "Custom image",
        icon: "success",
        timer: 1500
    });
    setTimeout(() => {
        window.open(url, "_blank");
    }, 1000);
}
function link1() {
    const url = "https://infinityschool.com.br/";
    Swal.fire({
        title: "Você está sendo redireciodo",
        text: "Aguarde",
        imageUrl: "https://cdn.eadplataforma.app/client/infinityschool/upload/others/e993f6d822d15efdb3585d1b733e4020.png",
        imageWidth: 400,
        imageHeight: 100,
        imageAlt: "Custom image",
        icon: "success",
        timer: 1500 ,
   
    });
    setTimeout(() => {
        window.open(url, "_blank");
    }, 1000);
}
window.addEventListener("scroll", () => {
    const header = document.querySelector("#Box-header");
    header?.classList.toggle("roll", window.scrollY > 300);
});
console.log("hello world!");
