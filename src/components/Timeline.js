import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function ColorsTimeline() {
  return (
    <Timeline position="alternate" sx={{
        width:"90%",
        margin:"auto"
    }}>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"orange",
            borderRadius:"24px",
            textAlign:"center",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Founded 1998</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="grey" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"blue",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Break Even at 1999</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"brown",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Featured at Local Magazine</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="grey" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"orange",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Established new center</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"blue",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Made roots in other countries</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="grey" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"brown",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Opened 100th Restaurant</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent sx={{
            color: 'white',
            fontSize:"16px",
            fontWeight:"bold",
            backgroundColor:"green",
            borderRadius:"24px",
            textAlign:"center !important",
            height:"60px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
          }}>Featured at Forbes India</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
