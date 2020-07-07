import styled from 'styled-components'

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
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 10px;
  & svg {
    margin-right: 5px;
  }
`
