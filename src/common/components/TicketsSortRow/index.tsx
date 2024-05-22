import { useDispatch, useSelector } from "react-redux";
import { getSorBy } from "store/filters/selectors";
import { SORT_VALUES } from "common/const";
import classNames from "classnames";
import { setSortBy } from "store/filters/actions";
import styles from "./styles.module.scss";

const TicketsSortRow = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSorBy);
  const sortValues = Object.values(SORT_VALUES);

  const handleSortChange = (value: string) => {
    dispatch(setSortBy(value));
  };

  return (
    <div className={styles.wrapper}>
      {sortValues.map((value) => (
        <div
          className={classNames(styles.item, {
            [styles.item__active]: sortBy === value,
          })}
          onClick={() => handleSortChange(value)}
          key={value}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default TicketsSortRow;
