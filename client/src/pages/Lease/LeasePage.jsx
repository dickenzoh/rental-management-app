import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import EventBusyOutlinedIcon from '@mui/icons-material/EventBusyOutlined';
import Header from '../../components/global/Header';

const LeasePage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample data for leases
  const leaseData = [
    {
      id: 1,
      tenantName: 'John Doe',
      propertyAddress: '123 Main Street',
      startDate: new Date('2023-07-01'),
      endDate: new Date('2024-06-30'),
      status: 'active',
    },
    {
      id: 2,
      tenantName: 'Jane Smith',
      propertyAddress: '456 Elm Avenue',
      startDate: new Date('2023-08-15'),
      endDate: new Date('2024-08-14'),
      status: 'expired',
    },
    {
      id: 3,
      tenantName: 'Alice Johnson',
      propertyAddress: '789 Oak Lane',
      startDate: new Date('2023-09-01'),
      endDate: new Date('2024-08-31'),
      status: 'active',
    },
    {
      id: 4,
      tenantName: 'Bob Roberts',
      propertyAddress: '101 Pine Street',
      startDate: new Date('2023-10-15'),
      endDate: new Date('2024-10-14'),
      status: 'expired',
    },
    {
      id: 5,
      tenantName: 'Eve Brown',
      propertyAddress: '222 Maple Avenue',
      startDate: new Date('2023-11-20'),
      endDate: new Date('2024-11-19'),
      status: 'active',
    },
    {
      id: 6,
      tenantName: 'Michael Johnson',
      propertyAddress: '333 Cedar Lane',
      startDate: new Date('2024-01-05'),
      endDate: new Date('2025-01-04'),
      status: 'expired',
    },
    {
      id: 7,
      tenantName: 'Emma Lee',
      propertyAddress: '444 Birch Road',
      startDate: new Date('2024-03-10'),
      endDate: new Date('2025-03-09'),
      status: 'active',
    },
    {
      id: 8,
      tenantName: 'David Smith',
      propertyAddress: '555 Elm Court',
      startDate: new Date('2024-05-15'),
      endDate: new Date('2025-05-14'),
      status: 'expired',
    },
    {
      id: 9,
      tenantName: 'Olivia Wang',
      propertyAddress: '666 Oak Street',
      startDate: new Date('2024-07-01'),
      endDate: new Date('2025-06-30'),
      status: 'active',
    },
    {
      id: 10,
      tenantName: 'Sophia Martinez',
      propertyAddress: '777 Maple Lane',
      startDate: new Date('2024-09-15'),
      endDate: new Date('2025-09-14'),
      status: 'expired',
    },
  ];

  const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'tenantName',
      headerName: 'Tenant Name',
      flex: 1,
    },
    {
      field: 'propertyAddress',
      headerName: 'Property Address',
      flex: 1,
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      flex: 1,
      type: 'date',
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      flex: 1,
      type: 'date',
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
              status === 'active'
                ? colors.greenAccent[600]
                : status === 'expired'
                ? colors.redAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {status === 'active' && <EventAvailableOutlinedIcon />}
            {status === 'expired' && <EventBusyOutlinedIcon />}
            {/* Add more status icons if needed */}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="LEASES" subtitle="Managing the Leases" />
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
        <DataGrid checkboxSelection rows={leaseData} columns={columns} />
      </Box>
    </Box>
  );
};

export default LeasePage;
