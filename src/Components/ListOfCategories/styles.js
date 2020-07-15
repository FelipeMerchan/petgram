import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  margin-bottom: 20px;
  ${props => props.fixed && css`
    {
      position: fixed;
      top: -20px;
      right: 0%;
      left: 0;
      z-index: 1;
      max-width: 400px;
      margin: 0 auto;
      padding: 5px;
      border-radius: 60px;
      ${fadeIn()}
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      background: #ffffff;
      transform: scale(.5);
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
