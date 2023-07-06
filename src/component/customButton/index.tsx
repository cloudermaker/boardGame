import './customButton.css';

export const CustomButton = ({
  label,
  onClick,
  className,
  disabled,
  children,
}: {
  label?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: JSX.Element;
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {children || label}
    </button>
  );
};
