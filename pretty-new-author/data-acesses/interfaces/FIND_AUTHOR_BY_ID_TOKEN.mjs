import { createEvent } from "../../../livvie-event-bus/createEvent.mjs";
import { IFindAuthorByIdEvent } from "./IFindAuthorByIdEvent.mjs";

const {TOKEN: FIND_AUTHOR_BY_ID_TOKEN} = createEvent(IFindAuthorByIdEvent);
export {FIND_AUTHOR_BY_ID_TOKEN};
