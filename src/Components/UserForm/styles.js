import styled from 'styled-components'

export const Form = styled.form`
  padding: 20px 0;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px 5px;
  margin-bottom: 10px;
  &[disabled] {
    opacity: .3;
  }
`

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

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
`
export const Error = styled.span`
  font-size: 14px;
  color: red;
`
