import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root>div {
      width: 90%;
      @media only screen and (min-width: 768px) {
        width: 90%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 1000;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 10px;
`;

export const SearchResultWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-items: center;
`;

export const SearchResultMenu = styled.div`
  display: flex;
  margin: 0 0.3rem 1rem 0.3rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  padding: 5px 16px;
  cursor: pointer;

  &:hover {
    background-color: #346cfd;
    color: white;
  }
  &#${({ check }) => check} {
    background-color: #346cfd;
    color: white;
  }

  &#sort {
    border: none;
    margin-left: 0;
    &:hover {
      background-color: #ffffff;
      color: #000000;
    }
  }
  &:first-child {
    cursor: context-menu;
  }
`;

export const MyEvaluationWrapper = styled.div`
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem 0;
`;

export const SearchTitle = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-family: 'Pretendard-SemiBold';
  padding-top: 4rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1.5px solid #000000;
  margin: 1.5rem 0;
  background-image: url('img/icon_search_24.svg');
  background-repeat: no-repeat;
  background-position: 99%;

  &:focus {
    outline: none;
  }
`;

export const Img = styled.img``;
export const HeadSelection = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  width: 100%;
  justify-content: space-between;
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const Color = styled.span`
  color: #346cfd;
  margin-left: 6px;
`;
