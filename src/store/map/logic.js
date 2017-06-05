export const queryMap = ({ center, geofire }) =>
  geoquery.updateCriteria({
    center,
    radius: 300
  });
