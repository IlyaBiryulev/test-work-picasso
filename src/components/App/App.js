import './App.css';
import { useGetListQuery } from '../../redux';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Post from '../Post/Post';

function App() {
  const {data = [], isLoading} = useGetListQuery()

  return (
    <div className='app'>
      {isLoading && <h1>Загрузка...</h1>}
      <Routes>
        <Route path='/'
          element={
            <Main data={data}/>
          }
        />
        <Route path='/:id'
          element={
            <Post />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
