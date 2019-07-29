import { createContext } from "react";
import {BeforeAuthContextType,AfterAuthContextType} from "../types/"
//Reducer updatestate content
export const initialContent = {isSignedIn:undefined,data:{},role:""};
export const BeforeAuthContext = createContext<BeforeAuthContextType>(initialContent);
export const AfterAuthContext = createContext<AfterAuthContextType>(initialContent);