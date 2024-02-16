import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  border: 1px solid darkgray;
  box-shadow: lightblue 0px 10px 10px;
  border-radius: 1rem;
  width: 100%;
  max-width: 15vw;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: .8rem;
  padding-bottom: .2rem;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 0.8rem 1rem;
  background: #f9f9fa;
  color: #000;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 0.8rem;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  max-width: 100%;
  padding: 0.8rem;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: orangered;
  border: none;
  border-radius: 8px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

const Image = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  & > img {
    margin-bottom: 1.5rem;
    width: 3rem;
    height: 3rem;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  color: #2a2a29;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: left;
`;
const Login: React.FC = () => {
    return (
        <Wrapper>
            <Form>
                <Image>
                    <img src="https://beetech.beeid.vn/images/logo.ico" alt="Logo"/>
                    <h1>BeeChat</h1>
                </Image>
                <FormWrapper>
                    <Title>Sign in to your account</Title>
                    <Label>
                        Email
                    </Label>
                    <Input
                        type="email"
                        name="email"
                    />
                    <Label>
                        Password
                    </Label>
                    <Input
                        type="password"
                        name="password"
                    />
                    <Button>Submit</Button>
                </FormWrapper>
            </Form>
        </Wrapper>
    );
}

export default Login;