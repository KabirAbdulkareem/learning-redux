import personReducer from "./personReducer";
import { UPDATE_PERSON } from "../actions/personActions";

describe("reducer", () => {
  it("Should update person name only", () => {
    const initialState = { name: "Kabir", email: "kabirabdulkareem@gmail.com" };
    expect(
      personReducer(initialState, { type: UPDATE_PERSON, payload: "Maxy" })
    ).toEqual({ name: "Maxy", email: "kabirabdulkareem@gmail.com" });
  });
});
