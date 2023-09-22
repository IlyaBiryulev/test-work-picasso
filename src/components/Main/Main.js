import './Main.css';
import ListItem from '../ListItem/ListItem';
import { useNavigate } from 'react-router-dom';

function Main({data}) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className='main'>
        <ul className='main__list'> 
            {data.map((item) => 
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
