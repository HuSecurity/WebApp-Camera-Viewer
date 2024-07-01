import React from 'react';  


// Formik 


import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea
} from "./../components/styles";

const Login = () => {
    return (
        <StyledContainer>
            <Statusbar style='dark'/>
            <InnerContainer>
                <PageLogo source={requrie("./../assets/images")}>
                <PageTitle>HuSecurity</PageTitle>

                </PageLogo>
            </InnerContainer>
        </StyledContainer>
    );

}

export default Login;