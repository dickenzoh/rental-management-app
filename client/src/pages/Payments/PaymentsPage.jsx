import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Header from '../../components/global/Header';

const PaymentsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const paymentsData = [
    {
      id: 1,
      tenantName: 'John Doe',
      amount: 1500,
      status: 'paid',
    },
    {
      id: 2,
      tenantName: 'Jane Smith',
      amount: 1200,
      status: 'unpaid',
    },
    {
      id: 3,
      tenantName: 'Alice Johnson',
      amount: 1350,
      status: 'paid',
    },
    {
      id: 4,
      tenantName: 'Bob Roberts',
      amount: 1100,
      status: 'unpaid',
    },
    {
      id: 5,
      tenantName: 'Eve Brown',
      amount: 1400,
      status: 'paid',
    },
    {
      id: 6,
      tenantName: 'Michael Johnson',
      amount: 1250,
      status: 'unpaid',
    },
    {
      id: 7,
      tenantName: 'Emma Lee',
      amount: 1300,
      status: 'paid',
    },
    {
      id: 8,
      tenantName: 'David Smith',
      amount: 1150,
      status: 'unpaid',
    },
    {
      id: 9,
      tenantName: 'Olivia Wang',
      amount: 1550,
      status: 'paid',
    },
    {
      id: 10,
      tenantName: 'Sophia Martinez',
      amount: 1450,
      status: 'unpaid',
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
      field: 'amount',
      headerName: 'Amount',
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
              status === 'paid'
                ? colors.greenAccent[600]
                : status === 'unpaid'
                ? colors.redAccent[700]
                : colors.redAccent[700]
            }
            borderRadius="4px"
          >
            {status === 'paid' && <CheckCircleOutlineOutlinedIcon />}
            {status === 'unpaid' && <HighlightOffOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="PAYMENTS" subtitle="Managing the Payments" />
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
        <DataGrid checkboxSelection rows={paymentsData} columns={columns} />
      </Box>
    </Box>
  );
};

export default PaymentsPage;
