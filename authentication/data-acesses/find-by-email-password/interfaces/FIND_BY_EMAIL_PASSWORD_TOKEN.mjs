import { createEvent } from "../../../../livvie-event-bus/createEvent.mjs";
import { IFindByEmailPasswordEvent } from "./IFindByEmailPassword.mjs";

const {TOKEN: FIND_BY_EMAIL_PASSWORD_TOKEN} = createEvent(IFindByEmailPasswordEvent);
export {FIND_BY_EMAIL_PASSWORD_TOKEN};