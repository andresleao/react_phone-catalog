import { FiChevronDown } from 'react-icons/fi';
import styles from './AppSelect.module.scss';

type AppSelectProps = {
  id: string;
  label: string;
  options: string[];
  width?: string;
};

export const AppSelect = ({ id, label, width, options }: AppSelectProps) => {
  return (
    <div className={styles.container} style={{ ...(width ? { width } : {}) }}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.selectWrapper}>
        <select name="select-name" id={id} className={styles.select}>
          {options.map(o => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <FiChevronDown className={styles.chevron} size={24} />
      </div>
    </div>
  );
};
