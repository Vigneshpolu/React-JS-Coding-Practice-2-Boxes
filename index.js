const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return (
    <div className={className}>
      <p>{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Boxes</h1>
    <div className="box-container">
      <Box className="box-1" boxText="Small" />
      <Box className="box-2" boxText="Medium" />
      <Box className="box-3" boxText="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
