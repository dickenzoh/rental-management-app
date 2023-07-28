import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import Header from '../../components/global/Header';

const MessagesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample data for messages
  const messagesData = [
    {
      id: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      cost: 50,
      date: '2023-07-28',
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
      cost: 75,
      date: '2023-07-27',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      phone: '555-555-5555',
      email: 'alice.johnson@example.com',
      cost: 120,
      date: '2023-07-26',
    },
    {
      id: 4,
      name: 'Bob Roberts',
      phone: '777-777-7777',
      email: 'bob.roberts@example.com',
      cost: 90,
      date: '2023-07-25',
    },
    {
      id: 5,
      name: 'Eve Brown',
      phone: '111-111-1111',
      email: 'eve.brown@example.com',
      cost: 40,
      date: '2023-07-24',
    },
    {
      id: 6,
      name: 'Michael Johnson',
      phone: '222-222-2222',
      email: 'michael.johnson@example.com',
      cost: 60,
      date: '2023-07-23',
    },
    {
      id: 7,
      name: 'Emma Lee',
      phone: '333-333-3333',
      email: 'emma.lee@example.com',
      cost: 55,
      date: '2023-07-22',
    },
    {
      id: 8,
      name: 'David Smith',
      phone: '444-444-4444',
      email: 'david.smith@example.com',
      cost: 80,
      date: '2023-07-21',
    },
    {
      id: 9,
      name: 'Olivia Wang',
      phone: '666-666-6666',
      email: 'olivia.wang@example.com',
      cost: 70,
      date: '2023-07-20',
    },
    {
      id: 10,
      name: 'Sophia Martinez',
      phone: '888-888-8888',
      email: 'sophia.martinez@example.com',
      cost: 65,
      date: '2023-07-19',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="MESSAGES" subtitle="List of Messages" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: 'none',
          },
          "& .MuiDataGrid-cell": {
            borderBottom: 'none',
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={messagesData} columns={columns} />
      </Box>
    </Box>
  );
};

export default MessagesPage;
