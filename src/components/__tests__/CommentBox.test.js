import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import MyProvider from "../../Root";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <MyProvider>
      <CommentBox />
    </MyProvider>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a text area and a two buttons", () => {
  expect(wrapper.find("textarea").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(2);
});

describe("the text area", () => {
  let comment;
  let event;
  beforeEach(() => {
    comment = "new comment";
    event = { target: { value: comment } };
    wrapper.find("textarea").simulate("change", event);
    wrapper.update();
  });

  it("allows the user to add text into the text area", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual(comment);
  });

  it("empties the text area once the input is submitted", () => {
    const fakeEvent = { preventDefault: () => {} };
    wrapper.find("form").simulate("submit", fakeEvent);
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
