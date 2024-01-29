import './App.scss';
import {Route,Routes} from 'react-router-dom'
import Login from '@/pages/login';
import Layout from '@/common_components/layout';


function App() {
  return (
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/login' element={<Login/>}></Route>
        </Route>
      </Routes>
  );
}

export default App;
