import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductService from '../../../../services/product-service';

const searchParamsToObject = (searchParams) => {
  const paramsObject = {};
  searchParams.forEach((value, key) => {
    if (paramsObject[key]) {
      paramsObject[key].push(value);
    } else {
      paramsObject[key] = [value];
    }
  });
  return paramsObject;
};

const useFilters = (selectedCategory) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState([]);

  const syncToUrlParams = (newFilters) => {
    const urlParams = searchParamsToObject(searchParams);
    newFilters.forEach((filter) => {
      switch (filter.type) {
        case 'range':
          if (filter.currMin > filter.min) {
            urlParams[`${filter.name}_min`] = filter.currMin;
          } else {
            delete urlParams[`${filter.name}_min`];
          }
          if (filter.currMax < filter.max) {
            urlParams[`${filter.name}_max`] = filter.currMax;
          } else {
            delete urlParams[`${filter.name}_max`];
          }
          break;
        case 'colorOptions':
          urlParams[filter.name] = filter.colorOptions
            .filter((x) => x.checked)
            .map((x) => x.id);
          break;
        case 'sizeOptions':
          urlParams[filter.name] = filter.sizeOptions
            .filter((x) => x.checked)
            .map((x) => x.id);
          break;
        case 'brandOptions':
          urlParams[filter.name] = filter.brandOptions
            .filter((x) => x.checked)
            .map((x) => x.id);
          break;
        default:
          break;
      }
    });
    setSearchParams(urlParams);
  };

  const changeRangeFilter = (filter, [min, max]) => ({
    ...filter,
    currMin: min,
    currMax: max,
  });

  const changeOptionsFilter = (filter, { id, checked }) => {
    const option = filter.colorOptions.find((x) => x.id === id);
    option.checked = checked;

    return filter;
  };
  const changeSizeFilter = (filter, { id, checked }) => {
    const option = filter.sizeOptions.find((x) => x.id === id);
    option.checked = checked;

    return filter;
  };
  const changeBrandFilter = (filter, { id, checked }) => {
    const option = filter.brandOptions.find((x) => x.id === id);
    option.checked = checked;

    return filter;
  };

  const changeFilterMap = {
    range: changeRangeFilter,
    colorOptions: changeOptionsFilter,
    sizeOptions: changeSizeFilter,
    brandOptions: changeBrandFilter,
  };

  const changeFilter = (name, type, props) => {
    const updatedFilters = filters.map((filter) => (
      filter.name === name
        ? changeFilterMap[type](filter, props)
        : filter));
    setFilters(updatedFilters);
    syncToUrlParams(updatedFilters);
  };

  const configureFilters = (filtersData) => filtersData.map((filter) => {
    const configuredFilter = { ...filter };
    switch (filter.type) {
      case 'range':
        configuredFilter.currMin = configuredFilter.min;
        configuredFilter.currMax = configuredFilter.max;
        break;
      case 'colorOptions':
        configuredFilter.colorOptions = filter.colorOptions.map((x) => ({ ...x, checked: false }));
        break;

      case 'sizeOptions':
        configuredFilter.sizeOptions = filter.sizeOptions.map((x) => ({ ...x, checked: false }));
        break;
      case 'brandOptions':
        configuredFilter.brandOptions = filter.brandOptions.map((x) => ({ ...x, checked: false }));
        break;
      default:
        break;
    }

    return configuredFilter;
  });

  const syncFromUrlParams = (configuredFilters) => {
    configuredFilters.forEach((filter) => {
      const filterRef = filter;
      const urlOptions = searchParams.getAll(filter.name);
      const minUrlOption = searchParams.get(`${filter.name}_min`);
      const maxUrlOption = searchParams.get(`${filter.name}_max`);

      if ([...urlOptions, minUrlOption, maxUrlOption].length > 0) {
        switch (filter.type) {
          case 'range':
            if (minUrlOption) {
              filterRef.currMin = Number(minUrlOption);
            }
            if (maxUrlOption) {
              filterRef.currMax = Number(maxUrlOption);
            }
            break;
          case 'colorOptions':
            urlOptions.forEach((id) => {
              const option = filter.colorOptions.find((x) => x.id === id);
              if (option) {
                option.checked = true;
              }
            });
            break;
          case 'sizeOptions':
            urlOptions.forEach((id) => {
              const option = filter.sizeOptions.find((x) => x.id === id);
              if (option) {
                option.checked = true;
              }
            });
            break;
          case 'brandOptions':
            urlOptions.forEach((id) => {
              const option = filter.brandOptions.find((x) => x.id === id);
              if (option) {
                option.checked = true;
              }
            });
            break;

          default:
            break;
        }
      }
    });

    return configuredFilters;
  };

  const getFiltersByCategory = async (categoryId) => {
    const filtersData = await ProductService.fetchFilters(categoryId);
    const configuredFilters = configureFilters(filtersData);

    const syncedFilters = syncFromUrlParams(configuredFilters);

    return syncedFilters;
  };

  useEffect(() => {
    if (selectedCategory) {
      (async () => {
        const configuredFilters = await getFiltersByCategory(selectedCategory);

        setFilters(configuredFilters);
      })();
    }
  }, [selectedCategory]);

  return { filters, changeFilter };
};

export default useFilters;
