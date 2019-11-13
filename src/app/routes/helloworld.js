
const Helloworld = {
    method: "GET",
    path: "/",
    handler: [(req, res) => {
        req.payload = { message: 'Hello World!', data: req.params};
    }]
}

export default Helloworld;