//Josh Heida 300644912

const http = require('http');
const fs = require('fs');
const mime = require('mime-types')
const port = 3000;

let lookup = mime.lookup;

const server =  http.createServer(function(req,res){
    let path = req.url;

    if (path== "/" || path == "/home"){
        path="/index.html";
    }
    let mime_type = lookup(path.substring(1));

    fs.readFile(__dirname + path, function(err, data){
        if (err){
            res.writeHead(404);
            console.log(err.message);
            res.end(err.message);
        }
        res.setHeader("X-content-type-options","nosniff")
        res.writeHead(200,{'Content-Type:' : mime_type});
        return res.end(data);
    })

});
server.listen(port,function(){
    console.log(`Server running at port ${port}`)
});