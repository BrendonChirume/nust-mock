import React from 'react';
import PropTypes from 'prop-types';
import AppModal from '../components/common/AppModal';

function DisplayUtilities(props) {
  const { handleModal, modalData } = props;
  const { show, ...other } = modalData;
  switch (show) {
    case 'modal':
      return (
        <AppModal
          handleClose={() =>
            handleModal({ show: '', title: undefined, open: false })
          }
          {...other}
        />
      );

    default:
      return <></>;
  }
}

DisplayUtilities.propTypes = {
  handleModal: PropTypes.func.isRequired,
  modalData: PropTypes.shape({
    show: PropTypes.string,
  }).isRequired,
};

export default DisplayUtilities;
