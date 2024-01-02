import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <Wrapper>
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*Gvgic29bgoiGVLmI6AVbUg.gif" alt="loading..." />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    text-align: center;
    margin-top: -100px;
    img {
        height: 200px;
    }
`;

export default Loader