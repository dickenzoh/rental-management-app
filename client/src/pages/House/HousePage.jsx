import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import Header from '../../components/global/Header';

const HousesPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const housesData = [
    {
      id: 1,
      address: '123 Main Street',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      status: 'occupied',
    },
    {
      id: 2,
      address: '456 Elm Avenue',
      bedrooms: 4,
      bathrooms: 3,
      area: 2200,
      status: 'vacant',
    },
    {
      id: 3,
      address: '789 Oak Lane',
      bedrooms: 2,
      bathrooms: 1,
      area: 1200,
      status: 'occupied',
    },
    {
      id: 4,
      address: '101 Pine Street',
      bedrooms: 3,
      bathrooms: 2,
      area: 1900,
      status: 'vacant',
    },
    {
      id: 5,
      address: '222 Maple Avenue',
      bedrooms: 2,
      bathrooms: 2,
      area: 1600,
      status: 'occupied',
    },
    {
      id: 6,
      address: '333 Cedar Lane',
      bedrooms: 4,
      bathrooms: 3,
      area: 2300,
      status: 'vacant',
    },
    {
      id: 7,
      address: '444 Birch Road',
      bedrooms: 3,
      bathrooms: 2,
      area: 2000,
      status: 'occupied',
    },
    {
      id: 8,
      address: '555 Elm Court',
      bedrooms: 2,
      bathrooms: 1,
      area: 1400,
      status: 'vacant',
    },
    {
      id: 9,
      address: '666 Oak Street',
      bedrooms: 4,
      bathrooms: 3,
      area: 2400,
      status: 'occupied',
    },
    {
      id: 10,
      address: '777 Maple Lane',
      bedrooms: 3,
      bathrooms: 2,
      area: 2100,
      status: 'vacant',
    },
  ];  

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'address',
      headerName: 'Address',
      flex: 1,
    },
    {
      field: 'bedrooms',
      headerName: 'Bedrooms',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'bathrooms',
      headerName: 'Bathrooms',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'area',
      headerName: 'Area (sqft)',
      type: 'number',
      headerAlign: 'left',
      align: 'left',
    },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === 'occupied'
                ? colors.greenAccent[600]
                : status === 'vacant'
                ? colors.redAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {status === 'occupied' && <HouseOutlinedIcon />}
            {status === 'vacant' && <Typography color={colors.grey[100]}>Vacant</Typography>}
            {/* Add more status icons if needed */}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="HOUSES" subtitle="Managing the Houses" />
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
        <DataGrid checkboxSelection rows={housesData} columns={columns} />
      </Box>
    </Box>
  );
};

export default HousesPage;
