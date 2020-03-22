import React from 'react'
import t from 'prop-types'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const Header = ({ children }) => (
  <HeaderComponent container direction='column' alignItems='center'>
    React Wars
  </HeaderComponent>
)

Header.propTypes = {
  children: t.node.isRequired
}

const HeaderComponent = styled(Grid)`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 60px;
  background: #8936bc;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
`

export default Header
