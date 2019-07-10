import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import SearchResults from "../Components/SearchResults";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchResults component", () => {
    test("renders", () => {
        const wrapper = shallow(<SearchResults />);

        expect(wrapper.exists()).toBe(true);

    });





    test("renders search results when the articles change", () => {
        const wrapper = mount(<SearchResults data={[]} />);

        wrapper.setProps({
            data: [
                { url: "http://google.com", title: "Google Search" },
                { url: "http://yahoo.com", title: "Yahoo Search" }
                      ]
        });

        expect(wrapper.find("a").at(0).prop("href")).toEqual("http://google.com");
        expect(wrapper.find("a").at(1).prop("href")).toEqual("http://yahoo.com");

    });


    test("renders search results when the articles change", () => {
        const wrapper = mount(<SearchResults data={[]} />);
    
        wrapper.setProps({
          data: [  { url: "http://google.com", title: "Google Search" }]
        });
    
        expect(wrapper.find("a").prop("href")).toEqual("http://google.com");
      });

});