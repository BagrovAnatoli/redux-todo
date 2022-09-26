import styles from './index.module.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter, filterYes, filterNo, filterAll } from "../../store/actions/creators/filter";
import { filterShowSelector, filterValueSelector } from "../../store/selectors/filter";
import { FILTER_ALL } from "../../store/actions/types/filter";
import { FilterIcon } from '../filter-icon';
import cx from "classnames";

export const Filter = ({ className }) => {

  const dispatch = useDispatch();
  const filterShow = useSelector(filterShowSelector);
  const filterValue = useSelector(filterValueSelector);
  const fillColor = filterValue === FILTER_ALL ? 'none' : '#000000';

  const handleToggleFilter = () => {
    dispatch(toggleFilter());
  };

  const handleFilterYes = () => {
    dispatch(filterYes());
  };

  const handleFilterNo = () => {
    dispatch(filterNo());
  };

  const handleFilterAll = () => {
    dispatch(filterAll());
  };

  return (
    <>
    <button className={className} onClick={handleToggleFilter}>Фильтр
        <FilterIcon fill={fillColor} filterShow={filterShow}/>
    </button>
    <ul className={cx({
      [styles.list_hidden]: !filterShow
    },
    styles.list,
    )}>
      <li className={styles['list-items']} onClick={handleFilterYes}>Выполненные</li>
      <li className={styles['list-items']} onClick={handleFilterNo}>Не выполненные</li>
      <li className={styles['list-items']} onClick={handleFilterAll}>Все</li>
    </ul>
    </>
  );
};