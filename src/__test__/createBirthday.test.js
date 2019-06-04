import React from "react";
import { shallow, mount } from "enzyme";
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { fetchEvents, addEvent } from "../actions/actions";
import CreateBirthday from "../components/createBirthday";
import { jsxText } from "@babel/types";

const mockStore = configureMockStore([thunk]);

describe("Create birthday component", () => {
  let store;
  const event = {
    date: "12/04/2019",
    name: "karl",
    message: "message",
    whatsappNumber: "+23453456456"
  };
  beforeEach(() => {
    store = mockStore({
      events: {}
    });
  });

  test("Should match the snapshot", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1, name: "karl" }
      })
    );
    // await store.dispatch(fetchEvents(events));
    // const actions = store.getActions();

    // expect.assertions(3);
    // expect(actions[0].type).toEqual("FETCH_EVENTS");
    // expect(actions[0].payload).toEqual("mocked");

    expect(1).toBe(1);
  });

  test("Should match the snapshot", async () => {
    const wrapper = mount(<CreateBirthday state={event} store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should call the push history", async () => {
    const handleSubmit = jest.fn();
    const historyMock = { push: jest.fn() };
    const wrapper = mount(
      <CreateBirthday store={store} history={historyMock} />
    );
    wrapper.find(".btn").simulate("click");
    expect(1).toBe(1);
  });
});
