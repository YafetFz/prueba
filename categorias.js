
document.addEventListener("DOMContentLoaded", function(){
    const botones = document.querySelectorAll(".item");
    const emp = document.querySelectorAll(".emp");

    botones.forEach((item,index) =>{
        switch (index) {
            case 0:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento) =>{
                            elemento.style.display = "flex";
                            setTimeout(function(){
                                elemento.style.scale = 1;
                            },500);
                        });
                    },1500);
                });

                break;

            case 1:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    });

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index != 0 && index != 1 && index != 3 && index != 9) {
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            } 
                        });   
                    },1500);  
                });
                break;

            case 2:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 9){
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;
            
            case 3:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 0 || index == 3){
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;

            case 4:
                item.addEventListener("mousedown",function(){
                    emp.forEach((elemento) =>{
                        elemento.style.scale = 0;
                        setTimeout(function(){
                            elemento.style.display = "none";
                        },1000);
                    })

                    setTimeout(function(){
                        emp.forEach((elemento,index) =>{
                            if (index == 1){
                                elemento.style.display = "flex";
                                setTimeout(function(){
                                    elemento.style.scale = 1;
                                },500);
                            }
                        });
                    },1500)
                });

                break;

            default:
                break;
        };
    });
}); 