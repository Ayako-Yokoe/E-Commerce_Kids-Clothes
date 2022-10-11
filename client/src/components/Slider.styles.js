import styled from "styled-components"
import { mobile } from "../responsive"

export const Container = styled.div`
  width: 100%;
  height: 88vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
export const Slide = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`
export const Desc = styled.p`
  margin: 40px 0;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 3px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 24px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--orange);
    color: var(--orange);
    background-color: var(--white);
    transition: all 0.3s ease;
  }
`
