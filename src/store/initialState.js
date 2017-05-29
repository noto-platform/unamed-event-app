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
}
