
const Helloworld = {
    method: "GET",
    path: "/",
    handler: [(req, res) => {
        req.payload = { message: 'Hello World!' };
    }, (req, res) => {
        Object.assign(req.payload, {test: "MORE!"});
    }]
}

export default Helloworld;