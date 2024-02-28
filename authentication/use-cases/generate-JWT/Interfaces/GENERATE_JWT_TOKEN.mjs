import { createEvent } from "../../../../livvie-event-bus/createEvent.mjs";
import { IGenerateJWTEvent } from "./IGenerateJWTEvent.mjs";

const { TOKEN: GENERATE_JWT_TOKEN } = createEvent(IGenerateJWTEvent);
export { GENERATE_JWT_TOKEN };
