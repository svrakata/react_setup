import { ADD_CONNECTOR, IConnectorModel, IConnectorsActionTypes, REMOVE_CONNECTOR, SET_CONNECTORS_LIST } from "./types"

export const AddConnector = (connector: IConnectorModel): IConnectorsActionTypes => ({
    connector,
    type: ADD_CONNECTOR,
})

export const RemoveConnector = (id: number): IConnectorsActionTypes => ({
    id,
    type: REMOVE_CONNECTOR,
})

export const SetConnectorsList = (list: IConnectorModel[]): IConnectorsActionTypes => ({
    list,
    type: SET_CONNECTORS_LIST,
})
