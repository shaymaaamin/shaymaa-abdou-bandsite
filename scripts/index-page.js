const comments = [
  {
    name: "Connor Walton",
    timestamp: new Date(2023, 3, 10),
    text: "This is art. This is inexplicable magic expressed in the purest way,everything that makes up this majestic work deserves reverence. Let us appreciate this forwhat it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    timestamp: new Date(2022, 11, 17),
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    timestamp: new Date(2022, 2, 4),
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

function clearComments() {
  const parentElement = document.querySelector(".comments__inner");
  parentElement.innerHTML = "";
}

function formatTimestamp(timestamp) {
  const currentTimestamp = new Date();
  const diff = currentTimestamp - timestamp;
  let seconds = Math.floor(diff / 1000),
    minutes = Math.floor(seconds / 60),
    hours = Math.floor(minutes / 60),
    days = Math.floor(hours / 24),
    months = Math.floor(days / 30),
    years = Math.floor(days / 365);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;
  days %= 30;
  months %= 12;
  
  if (years) {
    if (years === 1) {
      return years + ' year ago';
    } else {
      return years + ' years ago';
    }
  } else if (months) {
    if (months === 1) {
      return months + ' month ago';
    } else {
      return months + ' months ago';
    }
  } else if (days) {
    if (days === 1) {
      return days + ' day ago';
    } else {
      return days + ' days ago';
    }
  } else if (hours) {
    if (hours === 1) {
      return hours + ' hour ago';
    } else {
      return hours + ' hours ago';
    }
  } else if (minutes) {
    if (minutes === 1) {
      return minutes + ' minute ago';
    } else {
      return minutes + ' minutes ago';
    }
  } else if (seconds < 10) {
    return 'Just now';
  } else {
    return 'A few seconds ago';
  }
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
  timestamp.innerText = formatTimestamp(comment.timestamp);
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
