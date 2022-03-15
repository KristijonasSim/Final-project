import React, { useContext } from 'react';
import { Box } from '@mui/material';
import OptionsFilter from './color-filter';
import SizeFilter from './size-filter';
import RangeFilter from './range-filter';
import BrandFilter from './brand-filter';
// import AutocompleteFilter from './autocomplete-filter';
import { ProductContext } from '../contexts/product-context';

const FilterComponentMap = {
  // autocomplete: AutocompleteFilter,
  range: RangeFilter,
  colorOptions: OptionsFilter,
  sizeOptions: SizeFilter,
  brandOptions: BrandFilter,
};

const HomePageFilters = () => {
  const { filters, changeFilter } = useContext(ProductContext);

  return (
    <Box sx={{ margin: '10px' }}>
      {
        filters.map(({ type, ...props }) => {
          const Filter = FilterComponentMap[type];
          return (
            <React.Fragment key={props.name}>
              <Filter
                {...props}
                changeFilter={(newProps) => changeFilter(props.name, type, newProps)}
              />
            </React.Fragment>
          );
        })
      }
    </Box>
  );
};

export default HomePageFilters;
