import './cell.css';

const Cell = ({ label }: { label: string }): JSX.Element => {
  return (
    <div className="cell">
      <span>{label}</span>
    </div>
  );
};

export default Cell;
