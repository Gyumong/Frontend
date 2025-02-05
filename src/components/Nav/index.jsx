import React, { useState } from 'react';
import * as Styled from './styled';
// import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  let navigate = useNavigate();
  // const dispatch = useDispatch()
  // const loginState = useSelector((state) => state.login.value)
  const [button, setButton] = useState(true);

  const [click, setClick] = useState(false);

  console.log(button);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  // const logoutClick = () => {
  //     dispatch(loginState(false))
  //     navigate("/")
  //     console.log("로그인 상태", loginState)
  // }

  window.addEventListener('resize', showButton);

  return (
    <Styled.Navbar>
      {button ? <Styled.Img src="img/logo.png" width={110} onClick={() => navigate('/')} /> : <Styled.Img src="img/tabletlogo.png" width={110} onClick={() => navigate('/')} />}
      {/* <Styled.MobileIcon onClick={handleClick}>
        {click ? (
          <Styled.Img src={"Styled.Img/icon_color_fire_36.svg"} />
        ) : (
          <Styled.Img src={"img/icon_color_bee_36.svg"} />
        )}
      </Styled.MobileIcon> */}

      <Styled.NavMenu onClick={handleClick} click={click}>
        <Styled.NavLinks onClick={() => navigate('notice')}>공지사항</Styled.NavLinks>
        {/* {loginState ? ( */}
        <Styled.NavLinks onClick={() => navigate('login')}>로그인</Styled.NavLinks>
        {/* ) : (
                    <Styled.NavLinks onClick={() => logoutClick()}>
                        로그아웃
                    </Styled.NavLinks>
                )} */}

        <Styled.NavLinks id="signup" onClick={() => navigate('signup')}>
          회원가입
        </Styled.NavLinks>
      </Styled.NavMenu>
    </Styled.Navbar>
  );
};

export default Nav;
