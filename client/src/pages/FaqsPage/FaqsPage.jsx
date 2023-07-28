import React from 'react';
import { Box, useTheme } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';
import Header from '../../components/global/Header';

const Tenants = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const tenantsData = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      description: 'Vestibulum tempus ipsum vel turpis scelerisque, a facilisis nisl semper.',
    },
    {
      id: 4,
      name: 'Bob Roberts',
      description: 'Phasellus ac nisi sit amet tortor euismod hendrerit vel nec tortor.',
    },
    {
      id: 5,
      name: 'Eve Brown',
      description: 'Pellentesque facilisis urna sit amet massa dictum, id varius neque tristique.',
    },
    {
      id: 6,
      name: 'Michael Johnson',
      description: 'Aliquam varius dolor nec aliquam dictum. Vestibulum nec dui sapien.',
    },
    {
      id: 7,
      name: 'Emma Lee',
      description: 'Fusce id mauris vel libero feugiat consequat eu vel velit.',
    },
    {
      id: 8,
      name: 'David Smith',
      description: 'Curabitur in nulla at velit consectetur tincidunt. Mauris quis consectetur dolor.',
    },
    {
      id: 9,
      name: 'Olivia Wang',
      description: 'Ut tincidunt justo ac tincidunt fermentum. Curabitur eget nibh ac dolor tristique.',
    },
    {
      id: 10,
      name: 'Sophia Martinez',
      description: 'Sed auctor nisi at massa elementum eleifend. Cras et ipsum vitae turpis.',
    },
  ];

  return (
    <Box m="20px">
      <Header title="FAQS" subtitle="Most Asked Question" />

      {tenantsData.map((tenant) => (
        <Accordion key={tenant.id} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {tenant.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{tenant.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Tenants;
