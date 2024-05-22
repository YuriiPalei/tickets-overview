import { FILTER_VALUES } from "common/const";
import { getTransplantsFilters } from "store/filters/selectors";
import { useDispatch, useSelector } from "react-redux";
import { formatTransplantValue } from "common/utils";
import { setFiltersTransplants } from "store/filters/actions";
import { useCallback } from "react";
import Checkbox from "common/components/Checkbox";
import styles from "./styles.module.scss";

const Filters = () => {
  const dispatch = useDispatch();
  const transplantsFilters = useSelector(getTransplantsFilters);

  const filterValues = Object.values(FILTER_VALUES);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, value: number) => {
      const { checked } = event.target;

      const newFilters = checked
        ? [...transplantsFilters, value]
        : transplantsFilters.filter((item) => item !== value);

      dispatch(setFiltersTransplants(newFilters));
    },
    [transplantsFilters],
  );

  const isChecked = (value: number) => transplantsFilters.includes(value);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>КІЛЬКІСТЬ ПЕРЕСАДОК</p>
      <div className={styles.list}>
        {filterValues.map((value) => (
          <Checkbox
            key={value}
            checked={isChecked(value)}
            onChange={handleChange}
            label={formatTransplantValue(value)}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
