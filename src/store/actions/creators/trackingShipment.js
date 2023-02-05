import apiRequest from "../../../api/apiRequest";
import { getTrackingShipmentUrl } from "../../../api/paths";
import {
  GET_TRACKING_SHIPMENT_FAILED,
  GET_TRACKING_SHIPMENT_LOADING,
  GET_TRACKING_SHIPMENT_SUCCESS,
} from "../types/trackingShipment";

export const getTrackingShipmenAction = (
  trackingNumber,
  callbackSuccess = () => {}
) => {
  return async (dispatch) => {
    const onLoading = () => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_LOADING,
      });
    };
    const onSuccess = (responseData) => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_SUCCESS,
        payload: { data: responseData },
      });
      callbackSuccess();
    };
    const onError = (e) => {
      dispatch({
        type: GET_TRACKING_SHIPMENT_FAILED,
        payload: { error: e },
      });
    };

    apiRequest.get({
      url: getTrackingShipmentUrl(trackingNumber),
      onSuccess,
      onError,
      onLoading,
    });
  };
};
