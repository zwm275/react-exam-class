import './App.scss';
import {Navigate, Route,Routes} from 'react-router-dom'
import Login from '@/pages/login';
import Layout from '@/common_components/layout';
import {routersData} from '@/config'


function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Navigate to={'/login'}/>}/>
          <Route path={routersData.login.path} element={<Login/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
