$(document).ready(function(){
    $('.comentario-principal-usuario').on('click',function(){
     let btn=$('.comentario-principal-usuario').index(this);
     let id=$('.comentario-principal-usuario').eq(btn);
     let d=id.val();

    const d2={
        id: d,
      
    };
   alert(d)
            
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
                     const comentario=document.getElementById('mondongo')
            const template=document.querySelector('#Template-1').content
            const fragment=document.createDocumentFragment()
                     const mostrar=(data)=>{
                       
            for(i=0; i<=data.length;i++){
                if(data.length===0){
                 
                   
                }else{

                let foto='/imagenes/'+data[i].Img;
            template.querySelector('.avatar img').appendChild=foto;

const clone=template.cloneNode(true)
fragment.appendChild(clone)
                   
                       

                       
            
                      
                    }
          
       
        
    }
    comentario.appendChild(fragment)

}
          
    
         
          
    });
    
       
    
    });
    
        
    
    
    