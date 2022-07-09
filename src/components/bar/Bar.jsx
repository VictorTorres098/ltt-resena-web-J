import React from 'react'
import styled from 'styled-components'

export const Bar = (props) => {
  return (
    <Section>
        <div><h2>{props.barText}</h2></div>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    background: transparent;
    border-radius: 15px;
    border: 2px solid palevioletred;
    align-items: center;
    margin: 5px 1px;
    h2{
        margin-left: 25%; 
    }
`