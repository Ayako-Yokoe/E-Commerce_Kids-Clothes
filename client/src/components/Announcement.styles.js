import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  height: 4vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--orange);
  ${mobile({ fontSize: 12 })}
`
