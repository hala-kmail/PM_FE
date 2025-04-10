import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function ReferenceDateUsingValue() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          defaultValue={dayjs('2022-04-17')}
          views={['year', 'month', 'day']}
          className='w-full'
          sx={{
            '& .MuiInputBase-root': {
              width: '100%',
             
              border: '1px solid #d1d5db', // gray-300
              borderRadius: '0.375rem', // rounded-lg
              backgroundColor: '#ffffff',
              color: '#4b5563', // gray-700
              '&:focus': {
                outline: 'none',
                borderColor: '#3b82f6', // blue-500
                boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)', // blue focus ring
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
