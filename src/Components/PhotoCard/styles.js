import styled from 'styled-components'
import { fadeIn } from '../../styles/animations'

export const Article = styled.article`
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  position: relative;
  display: block;
  height: 0;
  width: 100%;
  padding: 56.25% 0 0 0;
  border-radius: 10px;
  overflow: hidden;
`

export const Img = styled.img`
  ${fadeIn()}
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
`
