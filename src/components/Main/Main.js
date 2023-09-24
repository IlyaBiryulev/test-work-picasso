import './Main.css';
import ListItem from '../ListItem/ListItem';
import { useNavigate } from 'react-router-dom';

function Main({posts, page}) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className='main'>
        <ul className='main__list'> 
            {posts?.map((item) => 
              <ListItem 
                key={item.id} 
                item={item}
                onMoreClick={handleCardClick}
              />
            )}
        </ul>
    </div>
  );
}

export default Main;
