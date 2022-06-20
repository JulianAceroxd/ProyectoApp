
let contador=0;
$(document).ready(function(){
    $('.comentario-principal-usuario').on('click',function(){

       
       
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
                        contador=contador+1;
                        if(contador>1){
                alert("heche compa relaax")
                        }else{
                        const comentario=document.getElementById('prueba')
                        const template=document.querySelector('#Template-1').content
                        const fragment=document.createDocumentFragment()
                        if(data.length<=0){
                            alert("Aun No Existen Comentarios Registrate Para Participar");
                      }else{
            for(i=0; i<data.length;i++){
               
              
            

                let foto='/imagenes/'+data[i].Img;
                
                template.querySelector('.comentarios-usuarios').id='Comentarios'+data[i].IdComentario;
                template.querySelector('.sub').id='sub'+data[i].IdComentario;
                template.querySelector('.comentarios-usuarios').value=+data[i].IdComentario;
              
                template.querySelector('.comentario-principal-usuario33').value=+data[i].IdComentario;
            template.querySelector('.avatar img').src=foto;
            template.querySelector('.nombre-usuario').textContent=data[i].NomUsu  + " " +data[i].ApeUsu+"  :"+"  "+data[i].Respuesta;
            

const clone=template.cloneNode(true)
fragment.appendChild(clone)
         
                       


            
                      
         
        
       
        
    
    comentario.appendChild(fragment)
    console.log(comentario);
   
     

          
    
         
  
        }
        const botones = document.querySelectorAll(".comentario-principal-usuario33")
        console.log(botones);
        let content=0;
        $('.comentario-principal-usuario33').on('click',function(){
            content=content+1;
            
            let btn=$('.comentario-principal-usuario33').index(this);
     let id2=$('.comentario-principal-usuario33').eq(btn);
     let d2=id2.val();
     



     const d3={
        id: d,
        id2:d2
    };

   

     let url='/subforo'
     fetch(url,{
method:'POST',
headers:{
    

    "content-Type":"application/json",
},
body: JSON.stringify(d3),
})
      .then(response=>response.json())
      .then(data2=>mostrar2(data2))
      .catch(error=>console.log(error))
      const mostrar2=(data2)=>{
       
        const idsub= data2[0].IdComentario
        console.log(idsub);
        const SubComentario=document.getElementById('sub'+idsub)
        const template2=document.querySelector('#Template-2').content
        const fragment2=document.createDocumentFragment()
        if(data2.length<=0){
            alert("Joa Mani Aun No Hay SubComentarios");
        }else{
        
 for(i2=0; i2<data2.length;i2++){
    let foto2='/imagenes/'+data2[i2].Img;
    template2.querySelector('.avatar img').src=foto2;
    template2.querySelector('.nombre-usuario').textContent=data2[i2].NomUsu  + " " +data2[i2].ApeUsu+"  :"+"  "+data2[i2].SubComentario;
    
     
    const clone2=template2.cloneNode(true)
    fragment2.appendChild(clone2)
             
                           
    
    
                
                          
             
            
           
            
        
    
     
}

SubComentario.appendChild(fragment2)
console.log(SubComentario);
}
}
        })
        
    }   
      }  
    }   
    });
    

    });
    
        
    
    
    