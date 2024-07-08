import React from "react";

// Formik
import { Formik } from "Formik";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
} from "./../components/styles";

const Login = () => {
  return (
    <StyledContainer>
      <Statusbar style="dark" />
      <InnerContainer>
        <PageLogo source={requrie("./../assets/images")}>
          <PageTitle>HuSecurity</PageTitle>
          <SubTitle>Account Login </SubTitle>

          <Formik
            initalValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              console.log(valuesalues);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea></StyledFormArea>
            )}
          </Formik>
        </PageLogo>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = (label, icon, ...props) => {
  return (
    <view>
      
    </view>
  )
};

export default Login;
