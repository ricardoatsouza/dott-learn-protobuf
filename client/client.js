const { credentials, loadPackageDefinition } = require("@grpc/grpc-js");
const { loadSync } = require('@grpc/proto-loader');

const packageDefinition = loadSync('./bundle.json');

const { helloworld } = loadPackageDefinition(packageDefinition)

const client = new helloworld.Greeter(
    'localhost:8080',
    credentials.createInsecure(),
);

client.sayHello({name: "Ricardo"}, (error, response) => {
    if (error !== null) {
        console.log(error)
    }

    console.log(`Greeting: ${response.message}`)
})