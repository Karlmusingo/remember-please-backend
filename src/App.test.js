import React from "react";
import { shallow } from "enzyme";
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { addEvent } from "./actions/actions";
import App from "./App";
import Hr from "./components/hr";
import Input from "./components/input";
import Birthday from "./components/birthday";
import Button from "./components/button";
import TextArea from "./components/textArea";
import NewMessage from "./components/newMessage";
import Navbar from "./components/navbar";

describe("App component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match the snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("div").length).toEqual(4);
  });
});

describe("Hr component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<Hr />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Navbar component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find("div").length).toEqual(4);
    expect(wrapper).toMatchSnapshot();
  });
  test("Should redirect", () => {
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(<Navbar history={historyMock} />);

    wrapper.find("#btn-cancel").simulate("click");

    expect(historyMock.push).toHaveBeenCalled();
  });
});

describe("NewMessage component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<NewMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Button component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Hr component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("textArea component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<TextArea />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Hr component", () => {
  test("Should match the snapshot", () => {
    const wrapper = shallow(<Birthday />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match the snapshot", () => {
    const wrapper = shallow(<Birthday status="done" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match the snapshot", () => {
    const wrapper = shallow(<Birthday status="saved" />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should match the snapshot", () => {
    const wrapper = shallow(<Birthday status="unknown" />);
    expect(wrapper).toMatchSnapshot();
  });
});
