import express from 'express';
import mongoose from 'mongoose';
import { EventManager } from './livvie-event-bus/EventManager.mjs';
import { FIND_BY_EMAIL_PASSWORD_TOKEN } from './authentication/data-acesses/find-by-email-password/interfaces/FIND_BY_EMAIL_PASSWORD_TOKEN.mjs';
import { FindByEmailPasswordMongo } from './authentication/data-acesses/find-by-email-password/implementations/mongoose/FindByEmailPasswordMongo.mjs';
import { GenerateJWTEvent } from './authentication/use-cases/generate-JWT/Implementations/GenerateJWTEvent.mjs';
import { GENERATE_JWT_TOKEN } from './authentication/use-cases/generate-JWT/Interfaces/GENERATE_JWT_TOKEN.mjs';
import { createLoginRoute } from './authentication/routes/admin/createLoginRoute.mjs';
import { FIND_AUTHOR_BY_ID_TOKEN } from './pretty-new-author/data-acesses/interfaces/FIND_AUTHOR_BY_ID_TOKEN.mjs';
import { FindAuthorByIdMongo } from './pretty-new-author/data-acesses/implementations/FindAuthorByIdMongoose.mjs';


mongoose.set("strictQuery", false);

// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";

await mongoose.connect(mongoDB);

const server = express();
server.use(express.json());
const eventManager = new EventManager();
eventManager.register(GENERATE_JWT_TOKEN, new GenerateJWTEvent());
eventManager.register(FIND_BY_EMAIL_PASSWORD_TOKEN, new FindByEmailPasswordMongo());
eventManager.register(FIND_AUTHOR_BY_ID_TOKEN, new FindAuthorByIdMongo())

const loginRouter = createLoginRoute(eventManager);

server.use('/login', loginRouter);
server.listen(3000, () => {
        console.log('Server listening on port 3000');
    });



