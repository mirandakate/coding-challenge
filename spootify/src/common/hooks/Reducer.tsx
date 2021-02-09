import React, { useReducer, useContext } from 'react'

const ReduxContext = React.createContext<any>(null);

export const useRedux = () => useContext(ReduxContext)

export enum ReduxActionType {
    SET_TOKEN = 'set-token',
}

interface ReduxAction {
    type: ReduxActionType;
    payload: any;
}

interface ReduxState {
    token: string
}

const reducer: React.Reducer<ReduxState, ReduxAction> = (prev, action) => {
    switch (action.type) {
        case ReduxActionType.SET_TOKEN:
          return {
              ...prev,
              token: action.payload
          }
        default:
          throw new Error();
    }
}

const initialState = {
    token: ""
}

interface ReduxProps {
    children: React.ReactNode;
}

const Redux: React.FunctionComponent<ReduxProps> = ({children}) => {
    const value = useReducer(reducer, initialState)
    return (
        <ReduxContext.Provider value={value}>
            {children}
        </ReduxContext.Provider>
    )
}

export default Redux