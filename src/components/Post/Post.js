import { useGetPostByIdQuery } from '../../redux';
import './Post.css';
import { useParams, useNavigate } from 'react-router-dom';

function Post() {
  const params = useParams();
  const navigate = useNavigate();
  const {data = [], isLoading} = useGetPostByIdQuery(params.id)
  console.log(params)


  return (
    <div className='post'>
      {isLoading && <h1>Загрузка...</h1>}  
      <button className='post__back-btn' onClick={() => navigate(-1)}>Назад</button>
      <h1 className='post__id'>Post #{data.id}</h1>
      <h2 className='post__title'>{data.title}</h2>
      <p className='post__text'>{data.body}</p>
    </div>
  );
}

export default Post;
