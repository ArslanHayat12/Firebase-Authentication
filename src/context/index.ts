import { createContext } from "react";
import {AppContextType,AppContextType2} from "../types/"
//Reducer updatestate content
export const initialContent = {value:false,data:{}};
export const AppContext = createContext<AppContextType>(initialContent);
export const AppContext2 = createContext<AppContextType2>(initialContent);