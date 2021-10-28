import React, { useState } from 'react'
import styled, { css } from 'styled-components'

function Test() {
  return (
    <>
      <Button color='black'>black</Button>
      <Button color='red'>red</Button>
      <Button color='green'>green</Button>
    </>
  )
}
const Button = styled.button`
  width: 16vw;
  height: 10vh;
  margin-top: 3rem;
  margin-left: 3rem;
  border-style:none;
  background-color: ${props => props.color};
  color: white;
  font-size: 2em;
`

export default Test
