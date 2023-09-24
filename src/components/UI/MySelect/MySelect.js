import './MySelect.css';

function MySelect({option, defaultValue, value, onChange}) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className='select'
    >
      <option disabled value=''>{defaultValue}</option>
        {option.map((option) =>
          <option key={option.value} value={option.value}>
              {option.name}
          </option>
        )}
    </select>
  );
}

export default MySelect;
