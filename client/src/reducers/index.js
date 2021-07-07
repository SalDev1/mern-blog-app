import { combineReducers } from "redux";
import blogs from "./blogs.js";
import auth from "./auth.js";

export default combineReducers({ blogs, auth });
