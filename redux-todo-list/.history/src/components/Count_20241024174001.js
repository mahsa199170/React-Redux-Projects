import { useDispatch, useSelector } from 'react-redux';
import { ADD_BY_ONE, MINUS_ONE, selectCount } from '../countSlice';
MINUS_ONE;
const Count = () => {
  const number = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(ADD_BY_ONE(2));
  };

  const handleSubract = () => {
    dispatch(MINUS_ONE());
  };
  return (
    <div>
      {number}
      <div>
        <button style={{ margin: 10 }} onClick={handleAdd}>
          Add
        </button>
        <button style={{ marginRight: 10 }} onClick={handleSubract}>
          Subtract
        </button>
        <button>Reset</button>
      </div>
    </div>
  );
};

export default Count;
