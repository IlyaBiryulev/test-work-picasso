import './ListItem.css';

function ListItem({item}) {
  return (
    <li className='list-item'>
        <h1 className='list-item__title'>{item.id} {item.title}</h1>
        <p className='list-item__text'>{item.body}</p>
        <button className='list-item__btn'></button>
    </li>
  );
}

export default ListItem;
