const { credentials, loadPackageDefinition } = require("@grpc/grpc-js");
const { loadSync } = require('@grpc/proto-loader');
const http = require("http");

const packageDefinition = loadSync('./bundle.json');

const { helloworld } = loadPackageDefinition(packageDefinition)

const client = new helloworld.Greeter(
    'localhost:8080',
    credentials.createInsecure(),
);

const server = http.createServer((_, response) => {
    client.sayHello({name: "Ricardo"}, (error, sayHelloResponse) => {
        if (error !== null) {
            console.log(error)
        }
    
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        })

        response.end(`Greeting: ${sayHelloResponse.message}`)
    })
})

server.listen(process.env.PORT || 9090, '0.0.0.0')