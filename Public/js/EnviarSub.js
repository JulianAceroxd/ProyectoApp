$(document).ready(function(){
alert("simon entran")
    $('.boton').on('click',function(){
alert("Dando Click")
    let btn=$('.boton').index(this);
    let id=$('#id').eq(btn);
    let idf=$('#idforo').eq(btn);
    let ids=$('#idc').eq(btn);
    let com=$('#comentario').eq(btn);
   
    let u=id.val();
    let f=idf.val();
    let c=com.val();
    let s=ids.val();

    
  $.ajax({
        type:"POST",
        url:'/AgrComentariosSub',
       data:{
            uu:u,ff:f,cc:c,ss:s
        }
    });
               
               
                   
        document.getElementById("comentario").value = "";
        alert("Tu Comentario Se Guardo Correctamente")
    
    

    
  


    

    });
});