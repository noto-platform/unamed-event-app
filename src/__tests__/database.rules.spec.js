const targaryen = require("targaryen/plugins/jasmine");
const rules = targaryen.json.loadSync(__dirname + "/../../database.rules.json");

const event = {
  id: "eventId",
  title: "foo",
  owner: "foo",
  start_time: Date.now(),
  lat: 0,
  lng: 0
};

describe("my security rules", () => {
  beforeEach(() => {
    jasmine.addMatchers(targaryen.matchers);
    targaryen.setFirebaseData({
      events: {
        eventId: event
      },
      locations: {
        eventId: {
          g: "?",
          l: [0, 0]
        }
      }
    });
    targaryen.setFirebaseRules(rules);
  });

  it("should allow authenticated user to read all data", () => {
    expect({ uid: "foo" }).canRead("/events");
    expect({ uid: "foo" }).canRead("/locations");
    expect(null).cannotRead("/events");
    expect(null).cannotRead("/locations");
  });

  it("should allow event owners to write", () => {
    expect({ uid: "foo" }).canWrite("/events/eventId", event);
    expect({ uid: "bar" }).cannotWrite("/events/eventId", event);
  });

  it("should allow authenticated users to create new events", () => {
    expect({ uid: "foo" }).canWrite("/events/eventId2", event);
  });
});
