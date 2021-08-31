import React from 'react';
import { styled, Tooltip, tooltipClasses } from '@material-ui/core';

export const LightTooltip = (props) => {
  const { size } = props;
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows[1],
      color: 'rgba(0, 0, 0, 0.9)',
      fontSize: size === 'small' ? 13 : 15,
    },
  }));
  return <CustomTooltip {...props} />;
};

export default LightTooltip;
