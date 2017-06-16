const R = require("ramda");
const axios = require("axios");
const parse = require("date-fns/parse");
const utils = require("./utils");

const providers = {
  djungeltrumman: {
    id: "djungeltrumman",
    url: "https://www.djungeltrumman.se/wp-admin/admin-ajax.php",
    params: () => ({
      action: "ajax_get_clubs",
      date: utils.getToday()
    }),
    transform: R.pipe(
      R.path(["data", "data"]),
      R.map(e => {
        const time = utils.convertHours(e.openinghours);
        return {
          owner: "djungeltrumman",
          created_at: Date.now(),
          title: e.post_title,
          tags: [e.club_category && e.club_category.toLowerCase()],
          description: e.post_content.replace(/<{1}[^<>]{1,}>{1}/g, "\n"),
          lat: +e.venue_address.lat,
          lng: +e.venue_address.lng,
          start_time: time.start.getTime(),
          end_time: time.end.getTime()
        };
      })
    )
  }
};

exports.crawl = (provider = providers.djungeltrumman) =>
  axios
    .get(provider.url, { params: provider.params() })
    .then(provider.transform)
    .catch(err => console.log(err));
