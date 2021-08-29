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
import { Grid, Toolbar, Typography } from '@material-ui/core';

function createData(coursecode, coursename, discription, type, mark) {
  return { coursecode, coursename, discription, type, mark };
}

const rows = {
  2020: [
    createData('SMA1102', 'Linear Algebra', 'C/W', 'Aggregate', 72),
    createData('SMA1102', 'Linear Algebra', 'C/W', 'Continuous', 72),
    createData('SMA1101', 'Calculus', '	CW', 'Continuous', 83),
    createData('SMA1101', 'Calculus', '	Course Work', 'Aggregate', 83),
    createData(
      'SCS1101',
      'Introduction to Computer Science and Programming',
      'CA',
      'Continuous',
      85
    ),
    createData(
      'SCS1101',
      'Introduction to Computer Science and Programming	',
      'Overall',
      'Aggregate',
      85
    ),
    createData('SCI1103', 'Database Systems', '	Final', 'Continuous', 72),
    createData('SCI1103', 'Database Systems', 'Final', 'Aggregate', 72),
    createData('SCI1102', 'Electronic Commerce', 'CA', 'Continuous', 75),
    createData('SCI1102', 'Electronic Commerce', 'CA', 'Aggregate', 75),
    createData(
      'SCI1101',
      'Information Management Concepts',
      'Overall Mark',
      'Aggregate',
      67
    ),
    createData(
      'SCI1101',
      '	Information Management Concepts',
      'Overall Coursework',
      'Continuous',
      67
    ),
    createData('ILI1105', 'Communication Skills', '	CA', 'Continuous', 64),
    createData('ILI1105', 'Communication Skills', '	CA', 'Aggregate', 64),
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

export const ContinuousAssesment = (props) => {
  return Object.keys(rows).map((row) => (
    <TableContainer
      sx={{ width: '100%', overflow: 'auto', height: '100%' }}
      key={row}
      component={Paper}
    >
      <EnhancedTableToolbar year={row} />
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Course code</TableCell>
            <TableCell align="left">Course name</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="right">Mark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[row].map((module, index) => (
            <TableRow
              key={module.coursecode + index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {module.coursecode}
              </TableCell>
              <TableCell align="left">{module.coursename}</TableCell>
              <TableCell align="left">{module.discription}</TableCell>
              <TableCell align="left">{module.type}</TableCell>
              <TableCell align="right">{module.mark}</TableCell>
            </TableRow>
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
