import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
import router from './server/routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const __dirname = fileURLToPath(import.meta.url);

app.use(express.static(__dirname + "/client/public"));

app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", "./client/views");
app.set("layout", "./layout");

//connect to the port
let port = process.env.PORT;
if (port == null || port === ""){
    port = 3000;
}

app.use(router);

app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});
