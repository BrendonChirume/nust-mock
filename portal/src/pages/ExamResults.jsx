import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Grid, useTheme } from '@material-ui/core';

function createData(coursecode, coursename, mark, classification, remark, period) {
  return {
    coursecode,
    coursename,
    mark,
    classification,
    remark,
    period,
  };
}

const rows = {
  2020: [
    createData(305, 'Cupcake', 3.7, 67, 'Pass', 1.1),
    createData(452, 'Donut', 25.0, 51, 'Pass', 1.1),
    createData(262, 'Eclair', 16.0, 24, 'Pass', 1.1),
    createData(159, 'Frozen yoghurt', 6.0, 24, 'Pass', 1.1),
    createData(356, 'Gingerbread', 16.0, 49, 'Pass', 1.1),
    createData(408, 'Honeycomb', 3.2, 87, 'Pass', 1.1),
  ],
  2021: [
    createData('ILI1105', 'Communication Skills', 56, '	P', 'Pass', 1.2),
    createData('SCI1101', 'Information Management Concepts', 69, 2.1, 'Pass', 1.2),
    createData('SCI1102', 'Electronic Commerce', 59, '	P', 'Pass', 1.2),
    createData('SCI1103', 'Database Systems', 68, 2.1, 'Pass', 1.2),
    createData(
      'SCS1101',
      'Introduction to Computer Science and Programming',
      73,
      2.1,
      'Pass',
      1.2
    ),
    createData('SMA1101', 'Calculus', 61, 2.2, 'Pass', 1.2),
    createData('SMA1102', 'Linear Algebra', '65', 2.1, 'Pass', 1.2),
  ],
};

const headCells = [
  {
    id: 'coursecode',
    numeric: false,
    disablePadding: true,
    label: 'Course code',
  },
  {
    id: 'coursename',
    numeric: false,
    disablePadding: false,
    label: 'Course name',
  },
  {
    id: 'mark',
    numeric: true,
    disablePadding: false,
    label: 'Mark',
  },
  {
    id: 'classification',
    numeric: true,
    disablePadding: false,
    label: 'Classification',
  },
  {
    id: 'remark',
    numeric: false,
    disablePadding: false,
    label: 'Remark',
  },
];

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
            Year:
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

export default function ExamResults() {
  const handleClick = (event, name) => {};
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', color: theme.palette.text.primary }}>
      {Object.keys(rows).map((row, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <Paper key={'ca-' + row} sx={{ width: '100%', mb: 2, overflow: 'hidden' }}>
            <EnhancedTableToolbar year={row} />
            <TableContainer sx={{ pb: 2 }}>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                      >
                        {headCell.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows[row].map((module) => (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, module.coursecode)}
                      role="checkbox"
                      tabIndex={-1}
                      key={module.coursecode}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {module.coursecode}
                      </TableCell>
                      <TableCell align="left">{module.coursename}</TableCell>
                      <TableCell align="right">{module.mark}</TableCell>
                      <TableCell align="right">{module.classification}</TableCell>
                      <TableCell align="left">{module.remark}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        );
      })}
    </Box>
  );
}
