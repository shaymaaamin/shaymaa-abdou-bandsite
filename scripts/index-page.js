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

function displayComment(data) {
  const parentElement = document.querySelector(".comments__list");

  const card = document.createElement("div");
  card.classList.add("comment");
  parentElement.appendChild(card);

  const avatar = document.createElement('div');
  avatar.classList.add('comment__avatar');
  card.appendChild(avatar);

  const wrapper = document.createElement('div');
  wrapper.classList.add('comment__wrapper');
  card.appendChild(wrapper);

  const name = document.createElement('div');
  name.classList.add('comment__name');
  name.innerText = data.name;
  wrapper.appendChild(name);

  const timestamp = document.createElement('div');
  timestamp.classList.add('comment__date');
  timestamp.innerText = formatTimestamp(data.timestamp);
  wrapper.appendChild(timestamp);

  const content = document.createElement('div');
  content.classList.add('comment__content');
  content.innerText = data.comment;
  wrapper.appendChild(content);

  const divider = document.createElement('div');
  divider.classList.add('divider');
  parentElement.appendChild(divider);

}

const loadComments = () => {
  return getComments().then(comments => {
    const parentElement = document.querySelector(".comments__list");
    parentElement.innerHTML = "";

    comments.sort((a, b) => b.timestamp - a.timestamp);
    comments.forEach(displayComment);
  });
}

// Load Comments on Page Load
document.addEventListener('DOMContentLoaded', () => {
  loadComments();
});

const form = document.querySelector(".comments__form form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (isFormValid(form)) {
    const name = event.target.name.value;
    const comment = event.target.text.value;

    // Add new comment through API
    // Then reload all comments
    addComment(name, comment).then(data => {
      loadComments().then(() => {
        event.target.name.value = "";
        event.target.text.value = "";
      });
    });
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
