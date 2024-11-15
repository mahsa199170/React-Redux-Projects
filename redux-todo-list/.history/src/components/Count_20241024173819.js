import { useDispatch, useSelector } from 'react-redux';
import { ADD_BY_ONE, selectCount } from '../countSlice';

const Count = () => {
  const number = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(ADD_BY_ONE(2));
  };
  return (
    <div>
      {number}
      <div>
        <button style={{ margin: 10 }} onClick={handleAdd}>
          Add
        </button>
        <button style={{ marginRight: 10 }}>Subtract</button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Count;
