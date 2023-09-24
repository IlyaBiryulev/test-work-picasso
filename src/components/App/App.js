import './App.css';
import { useEffect, useState } from 'react';
import { useGetListQuery } from '../../redux';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Post from '../Post/Post';

function App() {
  const [ page, setPage ] = useState(1);
  const {data = [], isLoading, isFetching} = useGetListQuery(page);
  const posts = data?.apiResponse ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <div className='app'>
      {isLoading && <h1>Загрузка...</h1>}
      <Routes>
        <Route path='/'
          element={
            <Main 
              posts={posts}
            />
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
