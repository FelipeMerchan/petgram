import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animations'

export const Nav = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
  background-color: #fcfcfc;
`
export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #888888;

  &[aria-current] {
    color: #000;

    &:after {
      content: '·';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
      ${fadeIn({ time: '0.5s' })};
    }
  }
`
