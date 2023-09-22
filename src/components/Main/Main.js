import './Main.css';
import ListItem from '../ListItem/ListItem';

function Main({data}) {
  return (
    <div className='main'>
        <ul className='main__list'> 
            {data.map((item) => 
                <ListItem key={item.id} item={item}/>
            )}  
        </ul>
    </div>
  );
}

export default Main;
