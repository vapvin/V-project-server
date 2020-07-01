require("dotenv").config()
import {GraphQLServer} from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4444;

const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server on port http://127.0.0.1:${PORT}`));