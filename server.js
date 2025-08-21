const http= require ('http')
const fs=require('fs')

const server=http.createServer((req ,res)=>{
     const log =`At ${Date.now()}: ${req.method} request at ${req.url}\n`
       fs.appendFile("log.txt",log,()=>{
        const url =req.url
        if(url=="/"){
            res.end("you are at home");
        }

        if(url=='/about')
        {
           res.end("sahil here");
        }

        if(url=='/skill')
        {
           res.end("your skills");
        }
            
        if(url=='/contact'){
         res.end("Address:xyz\n mob: 342094");
       }

       })
      
})

const port=8080
server.listen(port,(err)=>{
    console.log(`server started at ${port}`)
})