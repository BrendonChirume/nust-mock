import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Box,
  Collapse,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { ExpandLess, ExpandMore, Note, StarBorder } from '@material-ui/icons';
import PaymentsIcon from '@material-ui/icons/Payments';

function createData(date, type, description, currencyCode, amount, amount_zwl) {
  return { date, type, description, currencyCode, amount, amount_zwl };
}

const rows = [
  createData('2021-08-03', 'PAYMENT', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData('2021-08-03', 'PAYMENT', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData('2021-08-03', 'PAYMENT', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData(
    '2021-07-27',
    'PAYMENT',
    'Payment by - N02019372M',
    'ZWL',
    '-90',
    '-90'
  ),
  createData('2021-07-22', 'PAYMENT', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData('2021-07-22', 'PAYMENT', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData('2021-04-14', 'BLANK', 'CHIRUME', 'ZWL', '-5000', '-5000'),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Academic Fees',
    'ZWL',
    '13000',
    '13000'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Students Medical Aid',
    'ZWL',
    '4520',
    '4520'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Students Representative Council',
    'ZWL',
    '1170',
    '1170'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Sports Levy',
    'ZWL',
    '1440',
    '1440'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: REGISTRATION FEES',
    'ZWL',
    '420',
    '420'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Practical Projects',
    'ZWL',
    '1660',
    '1660'
  ),
  createData('2021-02-01', 'INVOICE', 'OnInv Fee Topup: Lab Fees', 'ZWL', 480, 480),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Infrastructure Develop levy',
    'ZWL',
    '2695',
    '2695'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Field Fees',
    'ZWL',
    '780',
    '780'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: EXAM FEES',
    'ZWL',
    '1240',
    '1240'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Compassionate Levy',
    'ZWL',
    '720',
    '720'
  ),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: COMPUTER LEVY',
    'ZWL',
    '80',
    '80'
  ),
  createData('2021-02-01', 'INVOICE', 'OnInv Fee Topup: Club Levy', 'ZWL', 670, 670),
  createData(
    '2021-02-01',
    'INVOICE',
    'OnInv Fee Topup: Bus Levy',
    'ZWL',
    '1440',
    '1440'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Students Medical Aid',
    'ZWL',
    '360',
    '360'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Students Representative Council',
    'ZWL',
    '45',
    '45'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Sports Levy',
    'ZWL',
    '150',
    '150'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: REGISTRATION FEES',
    'ZWL',
    '300',
    '300'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Practical Projects',
    'ZWL',
    '684',
    '684'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Lab Fees',
    'ZWL',
    '1150',
    '1150'
  ),
  createData('2020-11-30', 'INVOICE', 'OnInv Fee Topup: Field Fees', 'ZWL', 30, 30),
  createData('2020-11-30', 'INVOICE', 'OnInv Fee Topup: EXAM FEES', 'ZWL', 300, 300),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: Compassionate Levy',
    'ZWL',
    '90',
    '90'
  ),
  createData(
    '2020-11-30',
    'INVOICE',
    'OnInv Fee Topup: COMPUTER LEVY',
    'ZWL',
    '2142',
    '2142'
  ),
  createData('2020-11-30', 'INVOICE', 'OnInv Fee Topup: Club Levy', 'ZWL', 140, 140),
  createData('2020-11-30', 'INVOICE', 'OnInv Fee Topup: Camping Fee', 'ZWL', 30, 30),
  createData('2020-11-30', 'INVOICE', 'OnInv Fee Topup: Bus Levy', 'ZWL', 150, 150),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Academic Fees', 'ZWL', 4000, 4000),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Students Medical Aid',
    'ZWL',
    '40',
    '40'
  ),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Students Representative Council',
    'ZWL',
    '15',
    '15'
  ),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Sports Levy', 'ZWL', 50, 50),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: REGISTRATION FEES',
    'ZWL',
    '100',
    '100'
  ),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Practical Projects',
    'ZWL',
    '116',
    '116'
  ),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Lab Fees', 'ZWL', 10, 10),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Laboratory Deposit',
    'ZWL',
    '116',
    '116'
  ),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Infrastructure Develop levy',
    'ZWL',
    '175',
    '175'
  ),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Field Fees', 'ZWL', 10, 10),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: EXAM FEES', 'ZWL', 100, 100),
  createData(
    '2020-11-10',
    'INVOICE',
    'OnInv Fee: Compassionate Levy',
    'ZWL',
    '10',
    '10'
  ),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: COMPUTER LEVY', 'ZWL', 238, 238),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Club Levy', 'ZWL', 10, 10),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Camping Fee', 'ZWL', 10, 10),
  createData('2020-11-10', 'INVOICE', 'OnInv Fee: Bus Levy', 'ZWL', 50, 50),
  createData(
    '2020-10-30',
    'PAYMENT',
    '	N02019372M Initial Deposit',
    'ZWL',
    '-2100',
    '-2100'
  ),
  createData(
    '2020-07-21',
    'PAYMENT',
    '	N02019372M Initial Deposit',
    'ZWL',
    '-3000',
    '-3000'
  ),
];
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export default function Payments() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (option) => () => {
    setOpen(open !== option ? option : false);
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={3}>
            <Box
              boxShadow={2}
              sx={{
                bgcolor: 'background.paper',
                width: '100%',
                borderRadius: 1,
              }}
            >
              <Typography
                sx={{ px: 2, py: 1, textAlign: 'center' }}
                variant="h6"
                component="div"
              >
                Pay
              </Typography>
              <Divider />

              <List
                sx={{
                  width: '100%',
                  px: 2,
                  py: 1,
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                    Select applicable option
                  </ListSubheader>
                }
              >
                <ListItemButton onClick={handleClick('fees-statement')}>
                  <ListItemIcon>
                    <Note />
                  </ListItemIcon>
                  <ListItemText primary="Fees Statement" />
                  {open === 'fees-statement' ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={open === 'fees-statement'}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Select Statement
                      </ListSubheader>
                    }
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Paynow" />
                    </ListItemButton>
                  </List>
                </Collapse>
                <ListItemButton onClick={handleClick('pay-fees')}>
                  <ListItemIcon>
                    <PaymentsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Pay Fees" />
                  {open === 'pay-fees' ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open === 'pay-fees'} timeout="auto" unmountOnExit>
                  <List
                    component="div"
                    disablePadding
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader">
                        Select payment option
                      </ListSubheader>
                    }
                  >
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Paynow" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ bgcolor: 'background.paper' }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Fees
                </Typography>
                <Typography sx={{ px: 2, py: 1 }} variant="h6" component="div">
                  Balance
                </Typography>
                <Typography sx={{ px: 2 }} variant="h4" component="div">
                  $3,024.00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="secondary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} sx={{ maxHeight: 450 }}>
            <Toolbar
              sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
              }}
            >
              <Typography
                sx={{ flex: '1 1 100%', pt: 2, pb: 3 }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Fees Breakdown
              </Typography>
            </Toolbar>
            <Table sx={{ minWidth: 650 }} stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell align="left">Type</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="right">Currency Code</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Amount ZWL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((trans, index) => (
                  <StyledTableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="trans">
                      {trans.date}
                    </TableCell>
                    <TableCell align="left">{trans.type}</TableCell>
                    <TableCell align="left">{trans.description}</TableCell>
                    <TableCell align="right">{trans.currencyCode}</TableCell>
                    <TableCell align="right">{trans.amount}</TableCell>
                    <TableCell align="right">{trans.amount_zwl}</TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
}
