export const initialState = {
  me: [0, 0]
};

export const getMyLocation = ({ locations: { me } }) => ({ me });
