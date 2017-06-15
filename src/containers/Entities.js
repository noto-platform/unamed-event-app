import { connect } from "react-redux";
import PropTypes from "proptypes";
import { compose } from "recompose";

import { getListOfType } from "store/entities/selectors";

export const mapEntityById = entityType =>
  connect((state, { id }) => (state.entities[entityType] || {})[id] || {});

const entities = entityType => compose(connect(getListOfType(entityType)));

export default entities;
