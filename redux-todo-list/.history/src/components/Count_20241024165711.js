const Count = () => {
  return (
    <div>
      {number}
      <div>
        <button style={{ margin: 10 }} onClick={handleAdd}>
          Add
        </button>
        <button style={{ marginRight: 10 }} onClick={handleSubtract}>
          Subtract
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Count;
