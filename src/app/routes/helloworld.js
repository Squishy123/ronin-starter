export default {
    method: "GET",
    path: "/",
    handler: (req, res) => {
        req.payload = { message: 'Hello World!' };
    },
}