const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border loading-spinner"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;
