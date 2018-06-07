import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

const middlewares = [];
const logger = createLogger({ collapsed: true });
middlewares.push(logger);
middlewares.push(thunkMiddleware);

export default middlewares;
