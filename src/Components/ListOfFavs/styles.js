import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
  position: relative;
  display: inline-block;
  width: 31.33%;
  margin: 1%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`
export const Grid = styled.div`
  padding-top: 30px;
`

export const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
