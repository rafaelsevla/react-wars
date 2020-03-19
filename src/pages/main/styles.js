import styled from 'styled-components'

export const Button = styled.button`
  color: #28a745;
  background-color: #0000;
  border-color: #28a745;
  font-weight: 400;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
  }

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    outline: 0;
  }

  &:active:focus {
    box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    outline: 0;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  font-style: italic;
`

export const InstructionsContainer = styled.div``
export const ImgContainer = styled.div``
