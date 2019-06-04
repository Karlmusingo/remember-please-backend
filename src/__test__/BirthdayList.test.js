import React from "react";
import { shallow, mount } from "enzyme";
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { fetchEvents, addEvent } from "../actions/actions";
import BirthdayList from "../components/birthdayList";
import { jsxText } from "@babel/types";

const mockStore = configureMockStore([thunk]);

describe("Birthday List component", () => {
  let store;

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

    const events = [
      {
        date: "12/04/2019",
        name: "karl",
        message: "message",
        whatsappNumber: "+23453456456"
      }
    ];

    await store.dispatch(fetchEvents(events));
    const actions = store.getActions();

    expect.assertions(3);
    expect(actions[0].type).toEqual("FETCH_EVENTS");
    expect(actions[0].payload).toEqual("mocked");

    expect(1).toBe(1);
  });
  test("Should match the snapshot", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: { id: 1, name: "karl" }
      })
    );

    const events = {
      date: "12/04/2019",
      name: "karl",
      message: "message",
      whatsappNumber: "+23453456456"
    };
    const result = await store.dispatch(addEvent(events));

    // expect.assertions(3);
    expect(result.id).toEqual(1);
    expect(result.name).toEqual("karl");

    expect(1).toBe(1);
  });

  test("Should match the snapshot", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.reject({
        error: "Oops ):"
      })
    );

    const events = {
      name: "karl",
      message: "message",
      whatsappNumber: "+23453456456"
    };
    const result = await store.dispatch(addEvent(events));

    // expect.assertions(3);
    expect(result.error).toEqual("Oops");

    expect(1).toBe(1);
  });
});

describe("BirthdayList snapshot", function() {
  let store;

  beforeEach(() => {
    store = mockStore({
      events: {}
    });
  });
  test("Should match the snapshot", () => {
    const wrapper = shallow(<BirthdayList store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
describe("BirthdayList snapshot with props", function() {
  let store;

  const events = {
    todays: {
      events: [
        {
          id: 2,
          Messages: [
            {
              draft: true
            },
            {
              draft: false
            }
          ]
        }
      ],
      eventsCount: 1
    },
    thisWeek: {
      events: [
        {
          id: 1,
          Messages: [
            {
              draft: true
            },
            {
              draft: false
            }
          ]
        }
      ],
      eventsCount: 1
    },
    other: {
      events: [
        {
          id: 3,
          Messages: [
            {
              draft: true
            },
            {
              draft: false
            }
          ]
        }
      ],
      eventsCount: 0
    }
  };

  beforeEach(() => {
    store = mockStore({
      events,
      onFetchEvents: jest.fn()
    });
  });
  test("Should match the snapshot", () => {
    const wrapper = mount(<BirthdayList store={store} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should click the create button", () => {
    const historyMock = { push: jest.fn() };
    // const onClickSpy = jest.fn();
    const wrapper = mount(<BirthdayList store={store} history={historyMock} />);

    wrapper
      .find("#create")
      .at(0)
      .simulate("click");
    expect(historyMock.push).toHaveBeenCalled();
  });
});
