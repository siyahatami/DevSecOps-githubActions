
const filterByTerm = require("../src/utils");

const input = [
  { id: 1, url: "https://www.url1.dev" },
  { id: 2, url: "https://www.url2.dev" },
  { id: 3, url: "https://www.link3.dev" }
];


describe("Filter function", () => {


  test("it should filter by a search term (link)", () => {
    
    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);
    expect(filterByTerm(input, "LINK")).not.toEqual(output);

  });




  test("it should filter by a search term (uRl)", () => {

    const output = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" }
    ];
    expect(filterByTerm(input, "uRl")).toEqual(output);

  });




  test("it should throw when searchTerm is empty string", () => {

    const input = [];
    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(Error("searchTerm cannot be empty"));
    
  });


  
});
