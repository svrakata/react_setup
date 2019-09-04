import React from "react"
import styled from "styled-components"

interface IButton {
    name: string
}

const SButton = styled.button`
    border: 1px solid grey;
    background: transparent;
`

const Button: React.FC<IButton> = (props) => {
    const { name } = props

    return (
        <SButton>{ name }</SButton>
    )
}

export default Button
