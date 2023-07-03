import './customButton.css';

export const CustomButton = ({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}): JSX.Element => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};
