import styled from 'styled-components'
import lib from '../../images/lib.jpg'

export const Greeting = styled.div`
  padding: 4em;
  background-image: url(${lib});
  background-position: 50%;
  width: 100%;
  height: 582px;
  background-repeat: no-repeat;
  background-color: grey;
`
export const MessageBackground = styled.div`
  background: black;
  margin: auto;
  opacity: 0.9;
  width: 45%;
  border: 5px solid;
  border-color: white;
  position: relative;
`

export const Title = styled.h1`
  padding: 10px;
  font-size: 60px;
  text-align: center;
  color: white;
  font-family: Coustard;
  text-decoration: underline;
`
export const Message = styled.h2`
  padding: 10px;
  font-size: 48px;
  text-align: center;
  color: white;
  font-family: Coustard;
`
