$(document).ready(function(){

    $('.comentario-principal-usuario').on('click',function(){
    alert("si deseas participar registrate!")
    let btn=$('.comentario-principal-usuario').index(this);
     let id=$('.comentario-principal-usuario').eq(btn);
     let d=id.val();
    
    
             
     const d2={
        id: d,
      
    };
            
     let url='/comentariosforo'
                     fetch(url,{
                method:'POST',
                headers:{
                    
            
                    "content-Type":"application/json",
                },
                body: JSON.stringify(d2),
               })
                     .then(response=>response.json())
                     .then(data=>mostrar(data))
                     .catch(error=>console.log(error))
            
                     const mostrar=(data)=>{
                        let body=''
            for(i=0; i<=data.length;i++){
                if(data.length===0){
    alert("Aun No Existen Comentarios Se El Primero En Comentar!");
                    body+='<H1>Aun No Existen Comentarios Se El Primero En Comentar!</H1>'
                   document.getElementById('comentarios'+data[i].IdForo).innerHTML=body
                }else{



                   
                  
                body+=`

                <div></div>
                    <div class="comentario-principal-usuario">
                <div class="avatar">
                                <img src="/imagenes/${data[i].Img}" alt="img">
                            </div>
                            <div class="comentario">
                                <div class="usuario-comentario">
                                    <div class="texto">
                                        <a href="#" title="" class="nombre-usuario">${data[i].NomUsu} ${data[i].ApeUsu} :</a> ${data[i].Respuesta}
                                        <div class="menu-comentario">
                                            <i class="fas fa-pen"></i>
                                            <ul class="menu">
                                                <li><a href="">Editar</a></li>
                                                <li><a href="">Eliminar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                        <div class="botones-comentario">
                                         
                                        <button type="submit" onclick="TomaBoton(${data[i].IdComentario},${data[i].IdForo})" class="comentario-principal-usuario2" id="Mondongo" value="PETROLOVER" ONE>
                                           
                                            Ver Sub Comentarios
                                        </button>
                                    </div>
                                    <div id="prueba${data[i].IdForo}">

                                    </div>
                                </div>
                            </div>
                        </div>
                
                        `        

                       
                   console.log(    document.getElementById('comentarios'+data[i].IdForo).innerHTML=body)
                      
            }
          
       
        
    }
}
          
    
         
          
    });
    
       
    
    });
    
        
    
    
    