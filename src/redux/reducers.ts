import { ADD_CONNECTOR, IConnectorModel, IConnectorsActionTypes, REMOVE_CONNECTOR, SET_CONNECTORS_LIST } from "./types"

const initialState: IConnectorModel[] = []

export const connectorsReducer = (connectors = initialState, action: IConnectorsActionTypes): IConnectorModel[] => {
    switch (action.type) {
        case ADD_CONNECTOR:
            return [ ...connectors, action.connector ]

        case REMOVE_CONNECTOR:
            return connectors.filter((con) => con.id !== action.id)

        case SET_CONNECTORS_LIST:
            return action.list

        default:
            return connectors
    }
}

