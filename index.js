const server = require("./src/app.js");
const {
    PORT
} = process.env;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`${PORT}`);
});