import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Nav } from './components';
import GlobalStyle from './globalStyles';
import {
  EmailSignUp,
  LectureInfo,
  Main,
  MyInfo,
  Search,
  SignUp,
  Login,
  IdSearch,
  PwSearch,
} from './Pages';
import Notice from './Pages/Notice';
import NoticeDetail from './Pages/NoticeDetail';
import Myinfodetial from './Pages/myinfodetail/myinfodetail';
import ScrollButton from './components/ScrollButton';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav style={{ zindex: 5 }} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pwsearch" element={<PwSearch />} />
        <Route path="/idsearch" element={<IdSearch />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myinformation" element={<MyInfo />} />
        <Route path="/myinfodetail" element={<Myinfodetial />} />
        <Route path="/lectureinfo" element={<LectureInfo />} />
        <Route path="/search" element={<Search />} />
        <Route path="/emailsignup" element={<EmailSignUp />} />
        <Route path="/noticedetail" element={<NoticeDetail />} />
      </Routes>
      <ScrollButton />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
