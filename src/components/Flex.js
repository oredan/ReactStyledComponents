import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
display: flex;
flex-flow: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'flex-start'};
justify-content: ${props => props.justify || 'flex-start'};
margin: ${({ margin }) => margin || '0'};
`

const Flex = (props) => {
  return <StyledFlex {...props}/>
}

export default Flex
