import './MyInput.css';

function MyInput({value, onChange, placeholder}) {
  return (
    <input className='input' value={value} onChange={onChange} placeholder={placeholder}/>
  );
}

export default MyInput;