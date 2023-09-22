import './App.css';
import { useGetListQuery } from '../../redux';
import Main from '../Main/Main';

function App() {
  const {data = [], isLoading} = useGetListQuery()

  return (
    <div className='app'>
      {isLoading && <h1>Загрузка...</h1>}
      <Main data={data}/>
    </div>
  );
}

export default App;
