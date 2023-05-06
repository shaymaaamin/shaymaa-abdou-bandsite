const comments = [
  {
    name: "Connor Walton",
    timestamp: new Date(2021, 11, 17),
    text: "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this forwhat it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: new Date(2021, 9, 10),
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: new Date(2020, 9, 10),
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function clearComments() {
  const parentElement = document.querySelector(".comments__inner");
  parentElement.innerHTML = "";
}

function displayComment(comment) {
  const parentElement = document.querySelector(".comments__inner");

  const card = document.createElement("div");
  card.classList.add("comment__card");
  parentElement.appendChild(card);

  const avatar = document.createElement('div');
  avatar.classList.add('comment__avatar');
  card.appendChild(avatar);

  const wrapper = document.createElement('div');
  wrapper.classList.add('comment__wrapper');
  card.appendChild(wrapper);

  const name = document.createElement('div');
  name.classList.add('comment__name');
  name.innerText = comment.name;
  wrapper.appendChild(name);

  const timestamp = document.createElement('div');
  timestamp.classList.add('comment__timestamp');
  timestamp.innerText = comment.timestamp.toLocaleDateString();
  wrapper.appendChild(timestamp);

  const text = document.createElement('div');
  text.classList.add('comment__text');
  text.innerText = comment.text;
  wrapper.appendChild(text);

  const divider = document.createElement('div');
  divider.classList.add('divider');
  parentElement.appendChild(divider);

}

comments.forEach(displayComment);

// form.addEventListener("submit", (event) => {})
// form.onsubmit = (event) => {}

const form = document.querySelector(".comments__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isFormValid(form)) {
    const comment = {
      name: event.target.name.value,
      timestamp: new Date(),
      text: event.target.text.value,
    };

    clearComments();
    comments.unshift(comment);
    comments.forEach(displayComment);

    event.target.name.value = "";
    event.target.text.value = "";
  }
});

["input", "textarea"].forEach((key) => {
  const element = form.querySelector(key);
  element.onkeyup = (event) => {
    if (event.target.value) {
      event.target.classList.remove("error");
    } else {
      event.target.classList.add("error");
    }
  };
});

function isFormValid(form) {
  const input = form.querySelector("input");
  const textarea = form.querySelector("textarea");
  if (!input.value) {
    input.classList.add("error");
  }
  if (!textarea.value) {
    textarea.classList.add("error");
  }

  return !!input.value && !!textarea.value;
}
