const Count = () => {
  const handleAdd = () => {};
  return (
    <div>
      count
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
