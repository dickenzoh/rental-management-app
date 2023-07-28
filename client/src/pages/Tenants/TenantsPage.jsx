import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/global/Header';

const TenantsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tenantsData = [
    {
      id: 1,
      name: 'John Doe',
      age: 28,
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      access: 'admin',
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 32,
      phone: '987-654-3210',
      email: 'jane.smith@example.com',
      access: 'manager',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      age: 25,
      phone: '555-555-5555',
      email: 'alice.johnson@example.com',
      access: 'user',
    },
    {
      id: 4,
      name: 'Bob Roberts',
      age: 35,
      phone: '777-777-7777',
      email: 'bob.roberts@example.com',
      access: 'user',
    },
    {
      id: 5,
      name: 'Eve Brown',
      age: 30,
      phone: '111-111-1111',
      email: 'eve.brown@example.com',
      access: 'user',
    },
    {
      id: 6,
      name: 'Michael Johnson',
      age: 29,
      phone: '222-222-2222',
      email: 'michael.johnson@example.com',
      access: 'user',
    },
    {
      id: 7,
      name: 'Emma Lee',
      age: 27,
      phone: '333-333-3333',
      email: 'emma.lee@example.com',
      access: 'user',
    },
    {
      id: 8,
      name: 'David Smith',
      age: 31,
      phone: '444-444-4444',
      email: 'david.smith@example.com',
      access: 'user',
    },
    {
      id: 9,
      name: 'Olivia Wang',
      age: 26,
      phone: '666-666-6666',
      email: 'olivia.wang@example.com',
      access: 'user',
    },
  ]  

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
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
      field: 'accessLevel',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : access === 'manager'
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TENANTS" subtitle="Managing the Tenants" />
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
        <DataGrid checkboxSelection rows={tenantsData} columns={columns} />
      </Box>
    </Box>
  );
};

export default TenantsPage;
