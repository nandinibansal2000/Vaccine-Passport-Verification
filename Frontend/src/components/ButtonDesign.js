import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #3498db;
  border-radius: 2em;
  color: #3498db;
  cursor: pointer;
  display: flex;
  width: 300px;
  align-self: center;
  font-size: 0.8rem;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  :hover {
    color: #fff;
    box-shadow: 0 0 80px 80px #3498db inset;
  }
`;
