const filterSelector = (store) => store.filter;

export const filterShowSelector = (store) => filterSelector(store)?.showFilter || false;

export const filterValueSelector = (store) =>
    filterSelector(store)?.filterValue || false;