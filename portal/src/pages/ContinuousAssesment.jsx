import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

function createData(coursecode, coursename, discription, type, mark, excercises) {
  return { coursecode, coursename, discription, type, mark, excercises };
}

const rows = {
  2020: [
    createData('SMA1102', 'Linear Algebra', 'C/W', 'Aggregate', 72, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SMA1102', 'Linear Algebra', 'C/W', 'Continuous', 72, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SMA1101', 'Calculus', '	CW', 'Continuous', 83, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SMA1101', 'Calculus', '	Course Work', 'Aggregate', 83, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData(
      'SCS1101',
      'Introduction to Computer Science and Programming',
      'CA',
      'Continuous',
      85,
      [
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
      ]
    ),
    createData(
      'SCS1101',
      'Introduction to Computer Science and Programming	',
      'Overall',
      'Aggregate',
      85,
      [
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
      ]
    ),
    createData('SCI1103', 'Database Systems', '	Final', 'Continuous', 72, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SCI1103', 'Database Systems', 'Final', 'Aggregate', 72, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SCI1102', 'Electronic Commerce', 'CA', 'Continuous', 75, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('SCI1102', 'Electronic Commerce', 'CA', 'Aggregate', 75, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData(
      'SCI1101',
      'Information Management Concepts',
      'Overall Mark',
      'Aggregate',
      67,
      [
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },

        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
      ]
    ),
    createData(
      'SCI1101',
      '	Information Management Concepts',
      'Overall Coursework',
      'Continuous',
      67,

      [
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
        { date: '2021-08-31', title: 'intro', mark: 28, total: 30 },
      ]
    ),
    createData('ILI1105', 'Communication Skills', '	CA', 'Continuous', 64, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
    createData('ILI1105', 'Communication Skills', '	CA', 'Aggregate', 64, [
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
      {
        date: '2021-08-31',
        title: 'intro',
        mark: 28,
        total: 30,
      },
    ]),
  ],
};
const EnhancedTableToolbar = (props) => {
  const { year } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%', pt: 2, pb: 3 }}
        variant="body1"
        id="tableTitle"
        component="div"
      >
        <Grid container>
          <Grid item xs={3} md={2}>
            Period:
          </Grid>
          <Grid item xs={9} md={10}>
            February {year} - May {year}
          </Grid>
          <Grid item xs={3} md={2}>
            Academic Year:
          </Grid>
          <Grid item xs={9} md={10}>
            1 Semester: 2
          </Grid>
          <Grid item xs={3} md={2}>
            Decision:
          </Grid>
          <Grid item xs={9} md={10}>
            PROCEED
          </Grid>
        </Grid>
      </Typography>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  year: PropTypes.string.isRequired,
};

function Row(props) {
  const { module } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableRow onClick={() => setOpen(!open)}>
        <TableCell component="th" scope="row">
          {module.coursecode}
        </TableCell>
        <TableCell align="left">{module.coursename}</TableCell>
        <TableCell align="left">{module.discription}</TableCell>
        <TableCell align="left">{module.type}</TableCell>
        <TableCell align="right">{module.mark}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0 }}
          sx={{
            border: 'none',
            backgroundColor: open ? '#0a19293d' : 'transparent',
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Excercises & Tests
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="right">Mark</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {module.excercises.map((excercise, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {excercise.date}
                      </TableCell>
                      <TableCell component="th" scope="row" align="left">
                        {excercise.title}
                      </TableCell>
                      <TableCell align="right">{excercise.mark}</TableCell>
                      <TableCell align="right">{excercise.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export const ContinuousAssesment = (props) => {
  return Object.keys(rows).map((row) => (
    <TableContainer
      sx={{ width: '100%', pb: 2, overflow: 'auto', height: '100%' }}
      key={row}
      component={Paper}
    >
      <EnhancedTableToolbar year={row} />
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Course code</TableCell>
            <TableCell align="left">Course name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="right">Mark</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[row].map((module, index) => (
            <Row key={module.coursecode + index} year={row} module={module} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ));
};

// ContinuousAssesment.propTypes = {
//   props: PropTypes,
// };

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContinuousAssesment);
