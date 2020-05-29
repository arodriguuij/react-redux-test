import React from "react";
import { mount } from "enzyme";
import App from "../components/App";
import MyProvider from "./../Root";
import moxios from "moxios";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/users", {
    status: 200,
    response: [{ name: "Fetch #1" }, { name: "Fetch #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", (done) => {
  const wrapper = mount(
    <MyProvider>
      <App />
    </MyProvider>
  );
  wrapper.find(".fetch-comments").simulate("click");

  moxios.wait(() => {
    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find("li").length).toEqual(2);
      done();
      wrapper.unmount();
    });
  });
});
