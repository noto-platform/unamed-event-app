export default {
  events: {
    1: {
      created_at: Number,
      updated_at: Number,
      owner: String,
      title: String,
      desc: String,
      location_id: String,
      private: Boolean,
      start_time: Number,
      end_time: Number,
      spots: Number,
      attendees: [],
      invited: [],
      media: []
    }
  }
};

export const events = [
  "masthuggsgunget",
  "hela dagen lång"
].map((title, i) => ({
  created_at: Date.now(),
  owner: "foo",
  title,
  lat: 57.705407,
  lng: 11.966679,
  start_time: Date.now() * 1000 * 60 * 60 * 24 * 1,
  end_time: Date.now() * 1000 * 60 * 60 * 24 * 2,
  attendees: [],
  invited: [],
  media: []
}));
