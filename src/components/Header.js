import React from 'react';
import styled from 'styled-components';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const StyledHeader = styled.div`
    min-width: auto;
    width: 100%;
    z-index: 5050;
    background-color: white;
    height: 56px;
    display: flex;
    border-top: 3px solid black;
    border-bottom: 1px solid gray;
    position: relative;
    align-items: center;
`;

const HeaderContainer = styled.div`
  width: 1264px;
  max-width: 100%;
  height: 100%;
  gap: 10px;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

const HeaderLogoA = styled.a`
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
`;

const HeaderLogo = styled.img`
  width: 150px;
  height: 30px;
`;

const HeaderNavi = styled.nav`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderNaviTitle = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderSearchBar = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderSearchBarIcon = styled.img`
  width: 40px;
  height: 30px;
`;

const HeaderSearchBarInput = styled.input`
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  min-width: 200px;
  max-width: 600px;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderToolBar = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  gap: 10px;
  display: flex;
  list-style: none;
  margin: 0;
`;

const HeaderToolBarLogin = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
  background-color: skyblue;
  `;

const HeaderToolBarSignUp = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
  background-color: skyblue;
  `;

const HeaderNavigator = ({title1,title2,title3}) => {
    return (
        <HeaderNavi>
            <HeaderNaviTitle>{title1}</HeaderNaviTitle>
            <HeaderNaviTitle>{title2}</HeaderNaviTitle>
            <HeaderNaviTitle>{title3}</HeaderNaviTitle>
        </HeaderNavi>
    );
}

<input ></input>

const Header = () => {
    return (   
        <StyledHeader>
            <HeaderContainer>
                <HeaderLogoA>
                    <HeaderLogo src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="Logo" />
                </HeaderLogoA>
                <HeaderNavigator title1={"About"}/>
                <HeaderNavigator title2={"Products"}/>
                <HeaderNavigator title3={"For Teams"}/>
                <HeaderSearchBar>
                    <HeaderSearchBarIcon src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg" alt="Icon"/>
                    <HeaderSearchBarInput name="q" type="text" role="combobox" placeholder="Search…" value="" autocomplete="off" maxlength="240" class="s-input s-input__search js-search-field " aria-label="Search" aria-controls="top-search" data-controller="s-popover" data-action="focus->s-popover#show" data-s-popover-placement="bottom-start" aria-expanded="false">
                    </HeaderSearchBarInput>
                </HeaderSearchBar>
                <HeaderToolBar>
                    <HeaderToolBarLogin>Login</HeaderToolBarLogin>
                    <HeaderToolBarSignUp>SignUp</HeaderToolBarSignUp>
                </HeaderToolBar>
            </HeaderContainer>
        </StyledHeader>
    );
}
  
export default Header;