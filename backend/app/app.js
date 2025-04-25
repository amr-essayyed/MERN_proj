// const projDir = "C:/dev/nodejs_labs/5_postAndChat/"
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';                  // get express framework server constructing function
import connectToDB from '../../DB/DB.js'                         // connect to the database
import bodyParser from 'body-parser';           // get library of http-request-body parsing functions 
import cookieParser from "cookie-parser";
import userRoutes from './users/routes.js';     // get the router (sub program) associated with /users endpoint requests 
import postRoutes from './posts/routes.js';     
import authRoutes from './auth/routes.js';     
import cors from 'cors'; // Cross-Origin Resource Sharing

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export const __projdir = path.join(__dirname, '../../..');

const app = express();                          // instantiate an http server program

app.use(cors()); // Enable CORS for all origins (dev-time only)
// app.use(cors({origin: 'http://localhost:5173'})); // configure CORS to only allow requests from your Vite dev server

// attach parsing functions for different requestBody formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// attach all the subprograms to each associated endpoints
app.use('/assets',express.static(path.join(__projdir, '/server/public/assets')));

app.use(express.static(path.join(__dirname, '../../client/dist')));
console.log(path.join(__dirname, '../../client/dist'));


app.use('/auth', authRoutes);
app.use('/users', userRoutes); // Mount the router on the root path
app.use('/posts', postRoutes);

// fallback route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../client/dist/index.html')))

var port = process.env.PORT || 8080
//todo: listen to event 'DBConnected'
export default async function startServer() {
    await connectToDB();
    app.listen(port, () => console.log(`listening on port ${port}`) );
}

