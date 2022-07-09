import React from 'react'
import styled from 'styled-components'

export const ContenLayout = ({children}) => {
  return (
    <Conteiner>
        {children}
    </Conteiner>
    
  )
}

const Conteiner = styled.div`
    /* width: 90%; */
    margin: 20px 20px;
    @media(min-width: 700px){
      max-width: 1000px;
      margin: 20px auto;
    }
`

