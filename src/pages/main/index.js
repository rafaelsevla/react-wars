import React, { Component } from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'
import lightsaber from 'assets/img/lightsaber.png'
import { clickButton, resetState } from './actions'
import {
  Container,
  ImgContainer,
  InstructionsContainer,
  Title
} from './styles'

class Main extends Component {
  state = {
    img: lightsaber
  };

  componentDidMount () {
    this.props.resetState()
  }

  render () {
    const {
      clickButton,
      main: { buttonClick }
    } = this.props

    return (
      <Container>
        <InstructionsContainer>
          <Title>May be force with us</Title>
        </InstructionsContainer>
        <ImgContainer>
          <img src={buttonClick ? lightsaber : lightsaber} alt='' width='200px' />
        </ImgContainer>
      </Container>
    )
  }
}

Main.propTypes = {
  resetState: t.func,
  clickButton: t.func,
  main: t.object
}

const mapStateToProps = state => ({
  main: state.main
})

const mapDispatchToProps = {
  clickButton,
  resetState
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
