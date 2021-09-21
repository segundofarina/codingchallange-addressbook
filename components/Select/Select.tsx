import React, { FC } from 'react';
import styles from './styles';

export type SelectOption = Readonly<{ label: string; id: string }>;
export type SelectProps = {
  options: Readonly<SelectOption[]>;
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};

const Select: FC<SelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <select
      style={styles.root}
      onChange={(e) => {
        if (selectedOption) setSelectedOption(e.target.value);
      }}
    >
      {options.map(({ id, label }) => (
        <option key={id} value={id} selected={selectedOption === id}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.displayName = 'Select';
export default Select;
