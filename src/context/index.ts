import { createContext } from "react";
import {AppContextType} from "../types/"
//Reducer updatestate content
export const initialContent = {value:false,data:{}};
export const AppContext = createContext<AppContextType>(initialContent);