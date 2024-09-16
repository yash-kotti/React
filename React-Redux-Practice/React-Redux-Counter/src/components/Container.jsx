const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "50%" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};
export default Container;
