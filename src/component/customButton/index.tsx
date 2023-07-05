import './customButton.css';

export const CustomButton = ({
  label,
  onClick,
  className,
  disabled,
}: {
  label: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
