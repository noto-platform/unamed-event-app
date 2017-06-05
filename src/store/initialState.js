export default {
  auth: {
    uid: "ALBSpmcC85e8ernPon06ziIV44z2",
    displayName: "Carl Barrdahl",
    photoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/15726781_10154911489527082_4242109477799090621_n.jpg?oh=12dc8d728c428c81fd549a1dc5d6b8e5&oe=59E4ED6D",
    email: "carlbarrdahl@gmail.com",
    emailVerified: false,
    phoneNumber: null,
    isAnonymous: false,
    providerData: [
      {
        uid: "10155409381457082",
        displayName: "Carl Barrdahl",
        photoURL: "https://scontent.xx.fbcdn.net/v/t1.0-1/p100x100/15726781_10154911489527082_4242109477799090621_n.jpg?oh=12dc8d728c428c81fd549a1dc5d6b8e5&oe=59E4ED6D",
        email: "carlbarrdahl@gmail.com",
        providerId: "facebook.com"
      }
    ]
  },
  entities: {
    locations: {
      "-KlYE6Er5uAj_Ce5qjYy": {
        g: "t61h0fkbev",
        l: [11.9656, 57.6959]
      },
      "-KlYFJzxwBo-B15CJPZF": {
        g: "u6280nwvsb",
        l: [11.9626, 57.6929]
      },
      "-KlYEbIDURLVjcVvCCeW": {
        g: "u6280r1nfx",
        l: [11.9645, 57.6984]
      }
    },
    events: {
      "-KlYE6Er5uAj_Ce5qjYy": {
        created_at: 1496313525179,
        desc: "Dance like a boss with us",
        end_time: 308560118997477400,
        lat: 57.6959,
        lng: 11.9656,
        owner: "LxpX1jyEkSXXZP9NmzcFKOXvwwo2",
        start_time: 154280059498738700,
        title: "masthuggsgunget"
      },
      "-KlYEbIDURLVjcVvCCeW": {
        created_at: 1496313656486,
        desc: "Don't take the car!",
        end_time: 308582808847077400,
        lat: 57.6959,
        lng: 11.9656,
        owner: "LxpX1jyEkSXXZP9NmzcFKOXvwwo2",
        start_time: 154291404423538700,
        title: "hela dagen lång"
      },
      "-KlYFJzxwBo-B15CJPZF": {
        created_at: 1496313843541,
        desc: "White snow",
        end_time: 308615131951077400,
        lat: 57.6929,
        lng: 11.9626,
        owner: "10154931191697670",
        start_time: 154307565975538700,
        title: "technotunneln"
      }
    }
  },
  events: {},
  locations: {
    me: [11.9656, 57.6959]
  }
};
// export default {
//   events: {
//     1: {
//       created_at: Number,
//       updated_at: Number,
//       owner: String,
//       title: String,
//       desc: String,
//       location_id: String,
//       private: Boolean,
//       start_time: Number,
//       end_time: Number,
//       spots: Number,
//       attendees: [],
//       invited: [],
//       media: []
//     }
//   }
// };

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
