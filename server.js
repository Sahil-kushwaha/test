const http= require ('http')

const server=http.createServere((req ,res)=>{
       
       const url =req.url()
           if(url=="/"){
               res.end("you are at home");
           }

           if(requestUrl=='/about')
           {
              res.end("sahil here");
           }
            
})

const port=8080
server.listen(port,(err)=>{
    console.log(`server started at ${port}`)
})