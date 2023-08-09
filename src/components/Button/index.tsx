import styles from "./styles.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${
        props?.className ? props?.className : ""
      }`}>
      {children}
    </button>
  );
};

export default Button;
