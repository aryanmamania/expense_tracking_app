import React from 'react';
import styled from 'styled-components';
import Piggybank from '../assests/image_processing20210622-19269-nqurux.gif'; 
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 800px;
  max-width: 100%;
  min-height: 500px;
  margin-left: 550px;
  margin-top: 200px;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 50%;
`;

const Form = styled.form`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: bold;
  margin-top: -50px;
  padding-bottom: 5px;
`;

const Input = styled.input`
  background-color: #eee;
  border: 1px solid black;
  border-radius: 25px; 
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 25px; /* Add this line for oval shape */
`;

const Button = styled.button`
  border-radius: 20px;
  border: 1px solid black;
  background-color: #000000;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: -10px;
`;

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
`;

const Overlay = styled.div`
  background: white;
  background: -webkit-linear-gradient(to right, blue, pink);
  background: linear-gradient(to right, blue, pink);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
`;

const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
`;

const Box2 = styled.div`
  width: 550px;
  height: 1000px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-left: 100px;
`;

const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <SignUpContainer>
        <Form>
          <Title>CREATE ACCOUNT</Title>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign Up</Button>
          <Button onClick={() => navigate('/login')}>Sign In</Button>
        </Form>
      </SignUpContainer>

      <OverlayContainer>
        <Overlay>
          <RightOverlayPanel>
            <Box2>
              <Image src={Piggybank} alt="Piggybank" />
            </Box2>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
};

export default SignUp;
