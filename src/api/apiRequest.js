import bostaAxios from "./axios";

const apiRequest = {
  get: async ({
    url,
    onLoading = () => {},
    onSuccess = () => {},
    onError = () => {},
  }) => {
    try {
      onLoading();
      const { data } = await bostaAxios.get(url);
      onSuccess(data);
    } catch (error) {
      if (error.response.status === 500) {
        return onError("this shipment is not exist ");
      }
      return onError(error);
    }
  },
};
export default apiRequest;
