// Chrome 50 has disabled geolocation for non-HTTPS
// Mock with interval and timeout

let _watcherId;
const geolocation = {
  watchPosition: (onSuccess, onError, opts) => {
    if (process.env.NODE_ENV === "production") {
      _watcherId = navigator.geolocation.watchPosition(
        onSuccess,
        onError,
        opts,
      );
    } else {
      const mockLocation = {
        accuracy: 47,
        latitude: 57.6959,
        longitude: 11.9656,
      };
      setTimeout(() => onSuccess(mockLocation), 2000);
      _watcherId = setInterval(() => onSuccess(mockLocation), 60000);
    }
  },
  clearWatch: () => {
    if (process.env.NODE_ENV === "production") {
      navigator.geolocation.clearWatch(_watcherId);
    } else {
      clearInterval(_watcherId);
    }
  },
};

export default geolocation;
