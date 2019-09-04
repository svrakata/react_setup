export const ADD_CONNECTOR = "ADD_CONNECTOR"
export const REMOVE_CONNECTOR = "REMOVE_CONNECTOR"
export const SET_CONNECTORS_LIST = "SET_CONNECTORS_LIST"

export interface IConnectorModel {
    id: number
    name: string
    color: string
    iconSrc: string
}

export interface IAddConnector {
    type: typeof ADD_CONNECTOR
    connector: IConnectorModel
}

export interface IRemoveConnector {
    type: typeof REMOVE_CONNECTOR
    id: number
}

export interface ISetConnectorsList {
    type: typeof SET_CONNECTORS_LIST
    list: IConnectorModel[]
}

export type IConnectorsActionTypes = IAddConnector | IRemoveConnector | ISetConnectorsList
