import React from 'react';
import { connect } from 'react-redux';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: props.notification.visibleTrue ? '' : 'none',
  };
  return (
    <div style={style}>
      {props.notification.notification}
    </div>
  );
};

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(
  mapStateToProps,
)(Notification);
