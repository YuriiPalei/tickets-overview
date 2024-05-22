import styles from "./styles.module.scss";

type Props = {
  label: string;
  value: number;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: number) => void;
};

const Checkbox = ({ label, checked, onChange, value }: Props) => {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event, value)}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
