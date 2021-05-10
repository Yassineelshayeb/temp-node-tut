const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')
    }
    else{
        res.end(`
        <h1>Ooops!</h1>
        <p>We can't seen to find the page you're looking for</p>
        <a href="/"> back home</a>
        `);
    }
})

server.listen(80)