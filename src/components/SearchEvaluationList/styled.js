import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Color } from '../../globalStyles';

export const BoxString5 = styled(Button)`
  && {
    font-weight: bold;
    font-size: 12px;
    color: rgb(190, 190, 190);
    text-decoration: underline;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.5rem;
  margin-right: 0.7rem;
`;

export const Professor = styled.div`
  display: flex;
  color: #515151;
`;

export const Option = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  color: gray;
`;

export const Rate = styled.span`
  color: #346cfd;
  font-weight: bold;
  font-size: 1.8rem;
  padding-left: 10px;
`;

export const LectureWrapper = styled.div`
  width: 100%;
  border: 1px solid ${Color('border')};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const MarginTop = styled.div`
  &#top {
    padding: 14px 24px 0px 24px;
  }
  &#bottom {
    padding: 0px 24px 14px 24px;
  }
`;
export const DataColor = styled.div`
  padding-left: 0.7rem;
  font-weight: bold;
  &#cyan {
    color: #346cfd;
  }
  &#purple {
    color: #6200ee;
  }
`;

export const StarFlex = styled.div`
  display: flex;
  padding-right: 1rem;
  background-color: #f9f9f9;
  padding: 8px 12px;
  &#top {
    padding: 8px 12px 0px 12px;
    border-top: 1px solid #eeeeee;
  }
  &#bottom {
    padding: 0px 12px 8px 12px;
    border-bottom: 1px solid #eeeeee;
  }
`;
export const YearText = styled.span`
  border-radius: 10px;
  background-color: rgb(239, 239, 239);
  padding: 5px;
  font-size: 12px;
`;

export const EvaluationDetail = styled.div`
  display: flex;
  font-size: 1rem;
  padding-top: 0.7rem;
`;
export const PaddingRight = styled.span`
  padding-right: 0.7rem;
`;
export const EditButton = styled(Button)`
  && {
    padding: 5px 15px 5px 15px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
    background-color: rgb(239, 239, 239);
    color: rgb(52, 152, 219);
  }
`;

export const DeleteButton = styled.div`
  font-size: 0.7rem;
  color: #a3a3a3;
  cursor: pointer;
`;

export const FlexWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
