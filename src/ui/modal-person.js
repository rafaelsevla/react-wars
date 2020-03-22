import React from 'react'
import { connect } from 'react-redux'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle as DialogTitleMaterial,
  useMediaQuery,
  Grid,
  TextField
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

function ModalPerson ({ planet, open, person, handleClose }) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {person.name} ({person.gender}) {planet.length > 0 && `de ${planet}`}
        </DialogTitle>
        <DialogContent dividers>
          <Grid
            container
            direction='row'
            justify='space-around'
          >
            <TextField
              label='Altura'
              InputProps={{
                readOnly: true
              }}
              variant='outlined'
              value={person.height}
            />
            <TextField
              label='Massa'
              variant='outlined'
              InputProps={{
                readOnly: true
              }}
              value={person.mass}
            />
          </Grid>
          <Grid
            container
            direction='row'
            justify='space-around'
          >
            <CustomTextField
              variant='outlined'
              label='Cor do cabelo'
              InputProps={{
                readOnly: true
              }}
              value={person.hair_color}
            />
            <CustomTextField
              variant='outlined'
              label='Cor da pele'
              InputProps={{
                readOnly: true
              }}
              value={person.skin_color}
            />
          </Grid>
          <Grid
            container
            direction='row'
            justify='space-around'
          >
            <CustomTextField
              variant='outlined'
              label='Cor do olho'
              InputProps={{
                readOnly: true
              }}
              value={person.eye_color}
            />
            <CustomTextField
              variant='outlined'
              label='Ano de nascimento'
              InputProps={{
                readOnly: true
              }}
              value={person.birth_year}
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' variant='contained' autoFocus>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

ModalPerson.propTypes = {
  planet: t.string.isRequired,
  open: t.bool,
  person: t.object.isRequired,
  handleClose: t.func.isRequired
}

const DialogTitle = styled(DialogTitleMaterial)`
  width: 50vw;
`

const CustomTextField = styled(TextField)`
  && {
    margin-top: 10px;
  }
`

const mapStateToProps = state => {
  const { main } = state

  return { ...main }
}

export default connect(
  mapStateToProps,
  null
)(ModalPerson)
