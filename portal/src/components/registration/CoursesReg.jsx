import * as React from 'react';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import { Alert, Typography } from '@material-ui/core';

function createData(code, description, type, selcourse) {
  return {
    code,
    description,
    type,
    selcourse,
  };
}

const courses = [
  createData('SCI1201', 'Business Information Systems and Applications', 'CORE'),
  createData('SCI1202', 'Data Mining and Warehousing', 'CORE'),
  createData('SCI1203', 'Data Visualisation and Reporting', 'CORE'),
  createData('SCI1204', 'Programming Concepts and Development using Python', 'CORE'),
  createData('SCS1210', 'Discete Mathematics', 'CORE'),
  createData('SORS1201', 'Applied Statistics', 'Core'),
];

const stepInfo = {
  0: { title: 'Course pre-requisites', msg: 'pre', severity: 'info' },
  1: {
    title: 'Select courses',
    msg: 'Students with carry over courses are reminded to register them too!',
    severity: 'error',
  },
  2: { title: 'Confirm your courses', msg: 'confirm', severity: 'info' },
  3: {
    title: 'Confirm your details and register',
    msg: 'Logout and check courses after 5 minutes, Do not attemp to re-register!',
    severity: 'warning',
  },
};

export default function CoursesReg({ activeStep }) {
  const [selected, setSelected] = React.useState([]);

  React.useEffect(() => {
    let coreCourses = [];
    courses.map(
      (course) =>
        course.type.toLowerCase() === 'core' && coreCourses.push(course.code)
    );
    setSelected(coreCourses);
  }, []);

  const handleClick = (_event, course) => {
    const selectedIndex = selected.indexOf(course['code']);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, course['code']);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    !(course.type.toLowerCase() === 'core') && setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', p: 2, mb: 2 }}>
        <Typography sx={{ pb: 2 }} variant="h6" id="tableTitle" component="div">
          {stepInfo[activeStep].title}
        </Typography>
        <Alert sx={{ px: 2 }} severity={stepInfo[activeStep].severity}>
          {stepInfo[activeStep].msg}
        </Alert>
        <TableContainer>
          <Table
            size={activeStep >= 3 ? 'small' : 'medium'}
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <TableHead>
              <TableRow>
                <TableCell>Course code</TableCell>
                <TableCell>Course description</TableCell>
                <TableCell>Course type</TableCell>
                <TableCell
                  sx={{
                    whiteSpace: 'nowrap',
                    display: activeStep >= 2 ? 'none' : 'table-cell',
                  }}
                  align="center"
                >
                  Select course
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.map((course, index) => {
                const isItemSelected = isSelected(course.code);
                const labelId = `register-courses-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, course)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={course.code}
                    selected={activeStep <= 1 ? isItemSelected : false}
                  >
                    <TableCell sx={{ width: 130, textTransform: 'uppercase' }}>
                      {course.code}
                    </TableCell>
                    <TableCell component="th" scope="course">
                      {course.description}
                    </TableCell>
                    <TableCell sx={{ textTransform: 'uppercase' }}>
                      {course.type}
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                        display: activeStep >= 2 ? 'none' : 'table-cell',
                      }}
                      padding="checkbox"
                      align="center"
                    >
                      <Checkbox
                        color="secondary"
                        disabled={course.type.toLowerCase() === 'core'}
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
