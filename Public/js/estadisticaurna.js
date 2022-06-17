$(document).ready(function(){

    $('.botons').on('click',function(){

    let btn=$('.botons').index(this);
    let doc=$('.id').eq(btn);
    
    let d=doc.val();

   const d2={
       id: d
   };

   let =url='/urnadatos'
   fetch(url,{
    method:'POST',
    headers:{

        "content-Type":"application/json",
    },
    body: JSON.stringify(d2),
   })
   .then(Response=>Response.json())
   .then(data=>mostrarDatos(data))
   .catch(error=>console.log(error))
   const mostrarDatos=(data)=>{


console.log("aca va el tamaño"+data.length)


   for(i=0; i<data.length;i++){
    var button = ' <form class="for" action="Votos" method="post"><div class="loo"><input  type="submit"value="'+data[i].Opcion+'"  id="num_parrafos" name="opcion"/><input type="hidden"value="'+data[i].IdUrna+'"  id="num_parrafos" name="id"/></div></form>'
    $('#botones'+d ).append(button);
    console.log('botones'+d)
    console.log("aca van los datos"+data[i].Opcion)      

}}
  
    
    
    });
});