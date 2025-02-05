import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/Api';
import { useDispatch } from 'react-redux';
import { loginState } from '../../features/loginSlice';
import { FormControlLabel, Checkbox } from '@material-ui/core';

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [username, setUserName] = useState();
  const [password, setPassWord] = useState();

  const [db, setData] = useState({
    data: [],
  });

  const [loading, setLoading] = useState(false);
  // 체크박스 이벤트
  const onChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  const onChangeID = (e) => {
    setUserName(e.target.value);
  };
  const onChangePW = (e) => {
    setPassWord(e.target.value);
  };
  const onLogin = () => {
    loginApi(setData, setLoading, username, password);
  };

  const onKeypress = (e) => {
    if (e.key === 'Enter') {
      loginApi(setData, setLoading, username, password);
    }
  };

  useEffect(() => {
    console.log(db);
    if (loading === true) {
      if (db != null) {
        navigate('/myinformation');
        dispatch(loginState(true));
      }
    }
  });

  return (
    <Styled.Container>
      <Styled.Img src="img/signup.png" width={450} />
      <Styled.LoginWrapper>
        <Styled.Title>로그인</Styled.Title>
        <Styled.CssTextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="아이디"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={onChangeID}
        />
        <Styled.CssTextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChangePW}
          onKeyPress={onKeypress}
        />
        <Styled.SearchWrapper>
          <FormControlLabel
            control={<Checkbox checked={checked} onChange={onChangeCheckBox} color="#346cfd" />}
            label="로그인 유지"
          />
          <div>
            <Styled.SearchButton onClick={() => navigate('/idsearch')}>
              아이디 찾기
            </Styled.SearchButton>
            <Styled.SearchButton onClick={() => navigate('/pwsearch')}>
              비밀번호 찾기
            </Styled.SearchButton>
          </div>
        </Styled.SearchWrapper>
        <Styled.Button
          background="#346cfd"
          type="submit"
          fullWidth
          variant="contained"
          onClick={onLogin}
        >
          로그인
        </Styled.Button>
      </Styled.LoginWrapper>
    </Styled.Container>
  );
};

export default Login;
