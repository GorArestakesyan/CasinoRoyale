import type { ReactNode } from 'react';
import {
  Select as MuiSelect,
  MenuItem,
  FormControl,
  Stack,
} from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import ChevronDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { GLASS_EFFECT_DARK } from '@/theme/blur';

export interface ISelectProps extends Omit<
  MuiSelectProps,
  'classes' | 'renderValue' | 'children' | 'ref'
> {
  options: Array<{
    value: string | number;
    label: string;
    icon?: ReactNode;
  }>;
  placeholder?: string;
}

const StyledFormControl = styled(FormControl)({
  minWidth: '289px',
  '& .MuiInputLabel-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
});

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  width: '289px',
  height: '56px',
  background:
    'linear-gradient(27deg, rgba(255, 255, 255, 0.1) 73%, #4D4D4D 83%)',
  borderRadius: '8px',
  fontFamily: theme.typography.fontFamily,
  fontSize: '16px',
  lineHeight: '22px',
  padding: '0 16px',
  color: '#BABABA',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  '&.Mui-focused': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  '& .MuiSelect-select': {
    padding: '0 !important',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  '& .MuiSelect-icon': {
    color: 'white',
    right: '16px',
  },
}));

const MenuItemContent = styled(Stack)({
  flexDirection: 'row',
  alignItems: 'center',
  gap: '12px',
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  fontFamily: theme.typography.fontFamily,
  fontSize: '16px',
  color: '#BABABA',
  lineHeight: '22px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.Mui-selected': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
}));

const menuProps = {
  PaperProps: {
    sx: {
      ...GLASS_EFFECT_DARK,
      borderRadius: '8px',
      marginTop: '4px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      '& .MuiMenuItem-root': {
        color: 'white',
      },
    },
  },
} as const;

const Select = ({
  options,
  placeholder,
  className,
  value,
  onChange,
  ...props
}: ISelectProps) => {
  return (
    <StyledFormControl className={className}>
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty={!!placeholder}
        IconComponent={ChevronDownIcon}
        MenuProps={menuProps}
        renderValue={(selectedValue: unknown): ReactNode => {
          if (!selectedValue && placeholder) {
            return <span>{placeholder}</span>;
          }
          const option = options.find((opt) => opt.value === selectedValue);
          if (!option) return <span></span>;
          return (
            <MenuItemContent>
              {option.icon}
              <span>{option.label}</span>
            </MenuItemContent>
          );
        }}
        {...props}
      >
        {placeholder && (
          <StyledMenuItem value="" disabled>
            {placeholder}
          </StyledMenuItem>
        )}
        {options.map((option) => (
          <StyledMenuItem key={option.value} value={option.value}>
            {option.icon}
            <span>{option.label}</span>
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default Select;
