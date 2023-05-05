function createElement(parentElement, tagName, className) {
  let child = document.createElement(tagName);
  child.classList.add(className);
  parentElement.appendChild(child);

  return child;
}

let wrapper = document.querySelector(".shows_wrapper");
let section = createElement(wrapper, "section", "shows");
section.classList.add("page__section");
let aboutTitle = createElement(section, "h2", "shows__title");
aboutTitle.innerText = "Shows";
let showsInner = createElement(section, "section", "shows__inner");

let headerWrapper = createElement(showsInner, "div", "show__wrapper");
let dateHeader = createElement(headerWrapper, "h4", "show__header");
dateHeader.innerText = "DATE";
let venueHeader = createElement(headerWrapper, "h4", "show__header");
venueHeader.innerText = "VENUE";
let locationHeader = createElement(headerWrapper, "h4", "show__header");
locationHeader.innerText = "LOCATION";
let buttonHeader = createElement(headerWrapper, "h4", "show__header");

let shows = [
  {
    DATE: "Mon Sept 06 2021",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Tue Sept 21 2021",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Oct 15 2021",
    VENUE: "View Lounge",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Sat Nov 06 2021",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Fri Nov 26 2021",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA",
  },
  {
    DATE: "Wed Dec 15 2021",
    VENUE: "Press Club",
    LOCATION: "San Francisco, CA",
  },
];

shows.forEach(function (show) {
  addShow(show.DATE, show.VENUE, show.LOCATION);
});

function addShow(date, venue, location) {
  let card = createElement(showsInner, "div", "show__wrapper");

  let title1 = createElement(card, "h4", "show__header");
  title1.innerText = "DATE";
  let value1 = createElement(card, "div", "show__value");
  value1.innerText = date;

  let title2 = createElement(card, "h4", "show__header");
  title2.innerText = "VENUE";
  let value2 = createElement(card, "div", "show__value");
  value2.innerText = venue;

  let title3 = createElement(card, "h4", "show__header");
  title3.innerText = "LOCATION";
  let value3 = createElement(card, "div", "show__value");
  value3.innerText = location;

  let button = createElement(card, "button", "show__button");
  button.innerText = "Buy Tickets";
}
let card = document.querySelector(".shows__wrapper");
let selection = document.querySelector(".shows__button");
selection.addEventListener("click", () => {
  card.classList.add(".show__wrapper--selected");
});
