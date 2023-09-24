import './Main.css';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Preloader from '../Preloader/Preloader';
import MySelect from '../UI/MySelect/MySelect';
import MyInput from '../UI/MyInput/MyInput';

function Main({posts, isLoading}) {
  const [post, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setPosts(posts)
  }, [posts])

  const handleCardClick = (id) => {
    navigate(`/${id}`);
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...post].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return post;
  }, [selectedSort, post])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPost = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className='main'>
      <MyInput 
        placeholder='Поиск'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <div className='main__select'>
        <MySelect 
          value={selectedSort}
          onChange={sortPost}
          defaultValue='Выбрать сортировку'
          option={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описаню'}
          ]}
        />
      </div>
      <ul className='main__list'>
        {isLoading && <Preloader />}
        { sortedAndSearchPosts.length 
          ? sortedAndSearchPosts?.map((item) => 
              <ListItem 
                key={item.id} 
                item={item}
                onMoreClick={handleCardClick}
              />  
            ) 
          : <h2 className='main__no-posts'>Посты не найдены</h2>
        }
      </ul>
    </div>
  );
}

export default Main;
