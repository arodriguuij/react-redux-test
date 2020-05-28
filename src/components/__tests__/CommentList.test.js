import React from "react";
import CommentList from "../CommentList";
import { mount } from "enzyme";
import MyProvider from "../../root";

let wrapper;

beforeEach(() => {
  const initialState = { comments: ["Comment1", " Comment2"] };
  wrapper = mount(
    <MyProvider initialState={initialState}>
      <CommentList />
    </MyProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("shows one li element per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

it("shows text from each comment", () => {
  expect(wrapper.render().text()).toContain("Comment1");
  expect(wrapper.render().text()).toContain("Comment2");
});
