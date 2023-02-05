import { connect } from "react-redux";
import { getTrackingShipmenAction } from "../../store/actions/creators/trackingShipment";

const mapStateToProps = (state) => {
  return {
    loading: state.tracking.loading,
    error: state.tracking.error,
    trackingInfo: state.tracking.trackingInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrackingShipmen: (trackingNumber) =>
      dispatch(getTrackingShipmenAction(trackingNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
