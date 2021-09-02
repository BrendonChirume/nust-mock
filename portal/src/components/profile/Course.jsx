import * as React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert, Grid } from '@material-ui/core';

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
export default function Courses() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Alert severity="info" sx={{ py: 2, my: 2 }}>
        It is the responsibility of the student to make sure that the courses below
        are correct.
      </Alert>
      <div>
        {courses.map((course) => (
          <Accordion
            expanded={expanded === course.code}
            onChange={handleChange(course.code)}
            sx={{ '& ::before': { borderTop: 'none' } }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="course-content"
              id="course-header"
            >
              <Typography sx={{ width: '90%', flexShrink: 0 }}>
                {course.description}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Course Name:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    Business Information Systems & Applications Course
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Course Code:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    SCI 1201
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Produced:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    2019
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Revised:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    2021
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Lecturer:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    Moyo S.
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Venue:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    SLT2
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Office:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    AG17
                  </Typography>
                </Grid>
                <Grid item xs={4} md={4} lg={2}>
                  <Typography component="div" variant="body2">
                    Contact:
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8} lg={10}>
                  <Typography component="div" variant="body2">
                    ext. 2250
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
}
