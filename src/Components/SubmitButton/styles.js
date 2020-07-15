import styled from 'styled-components'

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  background: #b83b5e;
  &[disabled] {
    opacity: .3;
  }
`
