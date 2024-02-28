import { createEvent } from "../../../../livvie-event-bus/createEvent.mjs";
import { ILoginByEmailPasswordHandler} from "./ILoginByEmailPasswordHandler.mjs";

const {TOKEN: LOGIN_BY_EMAIL_PASSWORD_TOKEN} = createEvent(ILoginByEmailPasswordHandler);
export {LOGIN_BY_EMAIL_PASSWORD_TOKEN}