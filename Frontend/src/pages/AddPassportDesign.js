import styled from "styled-components";

export const CreateButton = styled.button`
  bottom: 40px;
  right: 40px;
  height: 70px;
  width: 70px;
  background: #000;
  border-radius: 50%;
  position: fixed;
  color: #fff;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 24px;
  font-size: 1.5rem;
  font-weight: 500;
  z-index: 5;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background: #3fada8;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    outline: none;
  }

  @media (min-width: 200px) and (max-width: 540px) {
    bottom: 40px;
    right: 40px;
    height: 50px;
    width: 50px;
  }
`;

export const ModalBody = styled.body`
  margin: 10px auto;
  padding: 10px 20px;
  background: red;
  border-radius: 8px;
`;

export const H1 = styled.h1`
  margin: 10px 0 30px 0;
  text-align: center;
  @media (min-width: 200px) and (max-width: 540px) {
    margin: 10px 0 10px 0;
    text-align: center;
    font-size: 20px;
  }
`;
export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  .light {
    font-weight: 300;
    display: inline;
  }
  @media (min-width: 200px) and (max-width: 540px) {
    display: block;
    margin-bottom: 2px;
    font-size: 14px;
  }
`;
export const LabelR = styled.label`
  display: block;
  margin-bottom: 8px;
  .light {
    font-weight: 300;
    display: inline;
  }
  :after {
    content: " *";
    color: red;
  }
  @media (min-width: 200px) and (max-width: 540px) {
    display: block;
    margin-bottom: 2px;
    font-size: 14px;
  }
`;
export const SubmitButton = styled.button`
  padding: 15px 15px 15px 15px;
  color: #fff;
  background-color: #42a5f5;
  font-size: 18px;
  margin-top: 10px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: none;

  @media (min-width: 200px) and (max-width: 540px) {
    padding: 5px 5px 5px 5px;
    color: #fff;
    background-color: #42a5f5;
    font-size: 15px;
    margin-top: 6px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: none;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 95%;
  min-height: 80px;
  justify-content: flex-start;
  text-decoration: none;
  color: #121212;
  margin: 5px 5px 5px 20px;
  margin-bottom: 0px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding-left: 0.5em;
  font-size: 20px;
  height: 40px;
  width: 100%;
  background-color: #e8eeef;
  color: #474747;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 1em;
  overflow: style;

  @media (min-width: 200px) and (max-width: 540px) {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding-left: 0.5em;
    font-size: 14px;
    height: 25px;
    width: 100%;
    background-color: #e8eeef;
    color: #474747;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 0.5em;
    overflow: style;
  }
`;

export const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding-top: 0.5em;
  padding-left: 0.5em;
  font-size: 16px;
  height: 80px;
  width: 100%;
  background-color: #e8eeef;
  color: #474747;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 1.5em;
  /* display: none; */
  @media (min-width: 200px) and (max-width: 540px) {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    padding-top: 0.5em;
    padding-left: 0.5em;
    font-size: 12px;
    height: 40px;
    width: 100%;
    background-color: #e8eeef;
    color: #474747;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 0.5em;
  }
`;
