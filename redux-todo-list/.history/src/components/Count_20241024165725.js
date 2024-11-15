const Count = () => {
  return (
    <div>
      count
      <div>
        <button style={{ margin: 10 }}>Add</button>
        <button style={{ marginRight: 10 }}>Subtract</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Count;
