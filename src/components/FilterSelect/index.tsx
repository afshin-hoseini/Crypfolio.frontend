import React, { ComponentProps, FC } from 'react';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';

import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const animatedComponents = makeAnimated();

const DropdownIndicator = (props: ComponentProps<typeof components.DropdownIndicator>) => {
  const { colors } = useTheme();

  return (
    <components.DropdownIndicator {...props}>
      <FontAwesomeIcon icon={faFilter} color={colors?.primary} />
    </components.DropdownIndicator>
  );
};

/**
 * Applies styles to select element.
 */
const StyledSelect = styled(Select)`
  .react-select__placeholder {
    ${(p) => p.theme.typographs?.['secondary-text']}
  }
  .react-select__option {
    ${(p) => p.theme.typographs?.['secondary-text']}
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__indicator {
    margin: 0 12px;
  }
  .react-select__control {
    border: none;
    box-shadow: none;
    border-radius: 10px;
  }

  .react-select__multi-value {
    border: 1px solid hsl(0, 0%, 90%);
    border-radius: 10px;
    background: none;
    overflow: hidden;
  }
  .react-select__multi-value__label {
    ${(p) => p.theme.typographs?.['secondary-text']}
  }
`;

const customComponents = { ...animatedComponents, DropdownIndicator };
export const FilterSelect: FC<FilterSelectProps> = ({ className = '', options = [] }) => {
  return (
    <StyledSelect
      className={`${className}`}
      classNamePrefix="react-select"
      closeMenuOnSelect={false}
      components={customComponents}
      placeholder="Filter by symbols"
      isMulti
      options={options}
    />
  );
};
