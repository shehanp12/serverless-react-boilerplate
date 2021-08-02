import { useContext, createContext } from "react";


export type authenticateState = {
  isAuthenticated : boolean;
  userHasAuthenticated : any;
}

const contextDefaultValues : authenticateState = {
  isAuthenticated: false,
  userHasAuthenticated: undefined

}

export const AppContext = createContext<authenticateState>(contextDefaultValues );

export function useAppContext() {
  return useContext(AppContext);
}
 

