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
               
           if(url=='/contact'){
            res.end("Address:xyz\n mob: 342094");
          }
})

const port=8000
server.listen(port,(err)=>{
    console.log(`server started at ${port}`)
})