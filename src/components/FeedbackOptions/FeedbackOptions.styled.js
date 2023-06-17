import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px;
  background: rgb(250,255,0);
  background: linear-gradient(63deg, rgba(250,255,0,0.7512254901960784) 0%, rgba(0,7,195,0.768032212885154) 86%);
  text-align: center;
  display: flex;
  justify-content: center;
  width: 700px;
  margin: 0 auto;
`;

export const Button = styled.button`
  font-size: 18px;
  padding: 10px 36px;
  background-color: #404BBF;
  color: #ffffff;
  border-radius: 17px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.25s linear 0s;

  &:hover,
  &:focus {
    border: 1px solid #5218fa;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
