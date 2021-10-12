import * as React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import NotyArticle from '../components/Notices/NotyArticle';

export default function Notices() {
  return (
    <Timeline position="right" sx={{ px: 0 }}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            pr: { xs: 1, md: 2 },
            pl: 0,
            maxWidth: { xs: 60, md: 150 },
          }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Wed, 14
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: { xs: 1, md: 2 }, mr: { md: 8 } }}>
          <NotyArticle severity="important" title="Fees">
            Students are required to have cleared their last semester&apos;s school
            fees before exams start!
          </NotyArticle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            pr: { xs: 1, md: 2 },
            pl: 0,
            maxWidth: { xs: 60, md: 150 },
          }}
          variant="body2"
          color="text.secondary"
        >
          Thur, 15
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: { xs: 1, md: 2 }, mr: { md: 8 } }}>
          <NotyArticle severity="info" title="Library">
            Students are advised to return thier library books before last day of
            semester
          </NotyArticle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            pr: { xs: 1, md: 2 },
            pl: 0,
            maxWidth: { xs: 60, md: 150 },
          }}
          variant="body2"
          color="text.secondary"
        >
          Thur, 15
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: { xs: 1, md: 2 }, mr: { md: 8 } }}>
          <NotyArticle severity="general" title="Openning dates">
            Schools are opening on the 15th of September
          </NotyArticle>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{
            m: 'auto 0',
            pr: { xs: 1, md: 2 },
            pl: 0,
            maxWidth: { xs: 60, md: 150 },
          }}
          variant="body2"
          color="text.secondary"
        >
          Thur, 15
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: { xs: 1, md: 2 }, mr: { md: 8 } }}>
          <NotyArticle severity="info" title="Application for accomodation">
            Applcation for accomodation is now open
          </NotyArticle>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
