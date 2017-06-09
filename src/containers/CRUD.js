import PropTypes from "proptypes";
import { compose, getContext, withState, withHandlers } from "recompose";

const crudMap = {
  events: require("store/events/crud")
  // users: require("store/users/crud"),
};

const CRUD = type =>
  compose(
    getContext({ firebase: PropTypes.object }),
    withHandlers(crudMap[type])
  );

export default CRUD;
