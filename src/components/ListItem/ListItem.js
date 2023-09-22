import './ListItem.css';

function ListItem({item, onMoreClick}) {
  function handleClick() {
    onMoreClick(item.id);
  }

  return (
    <li className='list-item'>
        <h1 className='list-item__title'>{item.id}. {item.title}</h1>
        <div className='list-item__content'>
          <p className='list-item__text'>{item.body}</p>
          <button className='list-item__btn' onClick={handleClick}>Подробнее</button>
        </div>
    </li>
  );
}

export default ListItem;
