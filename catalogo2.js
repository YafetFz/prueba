
document.addEventListener("DOMContentLoaded", function(){
    const menu = document.querySelector(".menu");
    const catalogo_list = document.querySelector(".catalogo_list");
    const opciones = document.querySelector(".opciones");
    const barra = document.querySelector(".barra");
    const body = document.querySelector("body");
    const windowWidth = window.innerWidth;
    const lista = document.querySelector(".lista");
    const op = document.querySelectorAll(".op");

    let click2 = 0;

    window.addEventListener("load", function(){
        window.scrollTo(0,0);
    });

    // Funcion que hace que el menu se abra y se cierre al pasar sobre el
    menu.addEventListener("mouseover",function(){
        barra.style.display = "none";
        menu.style.opacity = "1";
        menu.style.zIndex = "2";
        opciones.style.display = "flex";

        if (windowWidth <= 436) {
            menu.style.width = "35%";

        } else if (windowWidth <= 760) {
            menu.style.width = "30%";

        } else {
            menu.style.width = "25%";
        }

    });

    menu.addEventListener("mouseout",function(){
        barra.style.display = "block";
        opciones.style.display = "none";
        menu.style.opacity = "0.8";
        menu.style.zIndex = "1";

        if (windowWidth <= 436) {
            menu.style.width = "20%";

        } else if (windowWidth <= 760) {
            menu.style.width = "15%";

        } else{
            menu.style.width = "10%";
        }
    });



    // Funcion que hace que el catalogo se abra y se cierre al hacer click en un boton 
    lista.addEventListener("mousedown", function(){
        if (click2 == 0) {
            catalogo_list.style.display = "flex";
            catalogo_list.style.animation = "desplegar 0.3s linear forwards";
            click2 = 1;
        } else {
            catalogo_list.style.animation = "ocultar 0.2s linear forwards";
            setTimeout(function(){
                catalogo_list.style.display = "none";
            },500); 
            click2 = 0;
        }
    });

    op.forEach((caja)=>{
        caja.addEventListener("mousedown",function(){
            click2 = 0;
            catalogo_list.style.animation = "ocultar 0.2s linear forwards";
            setTimeout(function(){
                catalogo_list.style.display = "none";
            },500);
        });
    });


    // Funcion para que la el listado del catalogo se actualice su top y vaya siguiendo segun la posicion del navegador
    function actualizarTop(){
        const scrollTop = window.pageXOffset || document.documentElement.scrollTop;
        const offset = window.innerHeight * 0.15;
        const offset2 = window.innerHeight * 0.115;
        catalogo_list.style.top = (scrollTop + offset)+"px";
        menu.style.top = (scrollTop + offset2)+"px";
    }

    window.addEventListener("scroll", actualizarTop);
    actualizarTop();

    // const puerta1 = document.querySelector(".puerta1");
    // const puerta2 = document.querySelector(".puerta2");
    // const fondo = document.querySelector(".fondo");
    // const logo = document.querySelector(".logo");
    // const porcentaje = document.querySelector(".porcentaje");
    // const llenado = document.querySelector(".llenado");
    // let num = 10;

    // setTimeout(function(){
    //     puerta1.style.animation = "pt1 0.3s linear forwards";
    //     puerta2.style.animation = "pt2 0.3s linear forwards";
    // }, 5200);

    // setTimeout(function(){
    //     body.style.overflowY = "visible";
    //     fondo.style.display = "none";
    // }, 6000);

    // valor = setInterval(function(){
    //     num ++;
    //     if (num<=100) {
    //         porcentaje.style.width = num+"%";
    //         porcentaje.innerHTML = num+"%";
    //     } else {
    //         logo.style.opacity = "0";
    //         llenado.style.opacity = "0";
    //         clearInterval(valor);
    //     }
    // },40);

});