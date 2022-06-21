
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
                alert("Ya Diste Click")
                        }else{
                        const comentario=document.getElementById('prueba')
                        const template=document.querySelector('#Template-1').content
                        const fragment=document.createDocumentFragment()
                        if(data.length<=0){
                            alert("Aun No Existen Comentarios Se El Primero En Participar");
                      }else{
            for(i=0; i<data.length;i++){
               
              
            

                let foto='/imagenes/'+data[i].Img;
                
                template.querySelector('.comentarios-usuarios').id='Comentarios'+data[i].IdComentario;
            template.querySelector('.sub').id='sub'+data[i].IdComentario;
            template.querySelector('.com').id='com'+data[i].IdComentario

        
            localStorage.setItem("IdSub",data[i].IdComentario); 
            
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
        if(data2.length===0){
            let idlocal=localStorage.getItem("IdSub");
           
            alert(" Aun No Hay Sub Comentarios");
            const EnvComentario=document.getElementById('com'+idlocal)
             console.log(EnvComentario);
            const template3=document.querySelector('#Template-3').content
            const fragment3=document.createDocumentFragment()
            template3.querySelector('#idc').value=+idlocal;
            const clone3=template3.cloneNode(true)
            fragment3.appendChild(clone3)    
            EnvComentario.appendChild(fragment3)
            console.log(EnvComentario);
        
        }else{
        const idsub= data2[0].IdComentario
        console.log(idsub);
        const SubComentario=document.getElementById('sub'+idsub)
        const EnvComentario=document.getElementById('com'+idsub)
        const template3=document.querySelector('#Template-3').content
        const fragment3=document.createDocumentFragment()
        const template2=document.querySelector('#Template-2').content
        const fragment2=document.createDocumentFragment()
        console.log(data2.length)
       
         
 for(i2=0; i2<data2.length;i2++){
    let foto2='/imagenes/'+data2[i2].Img;
    template2.querySelector('.avatar img').src=foto2;
    template2.querySelector('.nombre-usuario').textContent=data2[i2].NomUsu  + " " +data2[i2].ApeUsu+"  :"+"  "+data2[i2].SubComentario;
    
     
    const clone2=template2.cloneNode(true)
    fragment2.appendChild(clone2)
             
    const clone3=template3.cloneNode(true)
    fragment3.appendChild(clone3)                 
    
    
                
                          
             
            
           
            
        
    
     
}

SubComentario.appendChild(fragment2)
console.log(SubComentario);
EnvComentario.appendChild(fragment3)
console.log(EnvComentario);
}

}
        })
     
    }   
      }  
    }   
    });
    

    });
    
        
    
    
    