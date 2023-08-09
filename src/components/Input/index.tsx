import styles from "./styles.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={`${styles.input} ${props?.className ? props?.className : ""}`}
    />
  );
};

export default Input;
