import styled  from 'styled-components'


export const Wrapper = styled.button`

background-color: #546de5;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 5px 25px;
  width: auto;
  
  height: 35px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:not(:disabled):hover {
    background-color: #596275;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
 
`


