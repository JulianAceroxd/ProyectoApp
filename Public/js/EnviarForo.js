$(document).ready(function(){

    $('.boton-enviar').on('click',function(){

    let btn=$('.boton-enviar').index(this);
    let id=$('#id').eq(btn);
    let idf=$('#idforo').eq(btn);
    let com=$('#comentario').eq(btn);
   
    let u=id.val();
    let f=idf.val();
    let c=com.val();

    
  $.ajax({
        type:"POST",
        url:'/AgrComentariosForo',
       data:{
            uu:u,ff:f,cc:c
        }
    });
               
               
                   
        document.getElementById("comentario").value = "";
        alert("Tu Comentario Se Guardo Correctamente")
    
    

    
  


    

    });
});