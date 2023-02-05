import {
  GET_TRACKING_SHIPMENT_FAILED,
  GET_TRACKING_SHIPMENT_LOADING,
  GET_TRACKING_SHIPMENT_SUCCESS,
} from "../actions/types/trackingShipment";

const initState = {
  trackingInfo: {},
  loading: false,
  error: null,
};
const counterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TRACKING_SHIPMENT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_TRACKING_SHIPMENT_SUCCESS:
      return {
        ...state,
        trackingInfo: payload.data,
        loading: false,
        error: null,
      };
    case GET_TRACKING_SHIPMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };

    default:
      return state;
  }
};

export default counterReducer;
