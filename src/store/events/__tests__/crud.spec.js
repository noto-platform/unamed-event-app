import firebase from "services/firebase";
import crud from "../crud";

describe("Event CRUD", () => {
  test("create", () => {
    crud.onCreate({
      firebase,
      auth: {
        uid: "foo"
      },
      fields: {
        title: "test",
        lat: 56,
        lng: 11
      }
    })();
  });
});
