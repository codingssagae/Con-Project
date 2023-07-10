import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from './Pages/HomePage/Home';
import ConRecord from './Pages/ConRecordPage/ConRecord';
import Community from './Pages/CommunityPage/Community';
import Setting from './Pages/SettingPage/Setting';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/conrecord" element={<ConRecord/>}/>
          <Route path="/community" element={<Community/>}/>
          <Route path="/setting" element={<Setting/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;