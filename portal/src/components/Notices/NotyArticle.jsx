import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { blue, blueGrey, red } from '@material-ui/core/colors';

function NotyArticle(props) {
  const { severity, title, children } = props;
  const barStyles = {
    important: {
      color: red[500],
    },
    info: {
      color: blue[700],
    },
    general: {
      color: blueGrey[200],
    },
  };

  return (
    <Box
      sx={{
        borderLeft: `4px solid ${barStyles[severity].color}`,
        borderRadius: 3,
        px: { xs: 2, md: 3 },
        py: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
        <Typography>{}</Typography>
      </Typography>
      <Typography variant="body2" color="textSecondary" component="div">
        {children}
      </Typography>
    </Box>
  );
}

NotyArticle.propTypes = {
  severity: PropTypes.string.isRequired,
};

export default NotyArticle;
