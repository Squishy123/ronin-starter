export default {
    method: "GET",
    path: "/",
    handler: (req, res) => {
        res.contentType = 'json';
        res.send({ message: 'Hello World!' });
    },
}