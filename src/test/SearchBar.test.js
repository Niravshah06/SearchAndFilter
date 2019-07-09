import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchBar from "../Components/SearchBar";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchBar component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find("input").props().type).toEqual("text");

  });



  test("user text is echoed", () => {
    const wrapper = shallow(<SearchBar performSearch={() => { }} />);

    wrapper.find("input").simulate("change", {

      target: { value: "hello", name: 'value' }
    });


    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  test("when the form is submitted the event is cancelled", () => {
    const wrapper = shallow(<SearchBar performSearchFromsubmit={() => { }} />);
    let prevented = false;
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });
    expect(prevented).toBe(true);
  });
  
});