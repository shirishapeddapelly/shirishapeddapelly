const home = document.getElementById("home");
const aboutUs = document.getElementById("aboutus");
const placement = document.getElementById("placement");
const Blog = document.getElementById("blogs");
const result = document.getElementById("result");

home.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./home.html", true);

  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      result.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
});

aboutUs.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./aboutus.html", true);

  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      result.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
});

placement.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./placementtraining.html", true);

  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      result.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
});

Blog.addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./blogs.html", true);

  xhr.onload = function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
      result.innerHTML = xhr.responseText;
    }
  };

  xhr.send();
});
