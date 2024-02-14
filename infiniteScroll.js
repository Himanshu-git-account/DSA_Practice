const infinitSCrollConatiner = document.getElementById(
  "infiniteScrollContainer"
);

let postList = [];
let page = 1;
const fetchData = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_limit=15&_page=${page}`
  );
  const data = await res.json();
  return data;
};
fetchData().then((data) => {
  data.forEach((item) => {
    createCard(item);
  });
});

const createCard = (item) => {
  const divItem = document.createElement("div");
  divItem.innerText = item.title;
  divItem.classList.add("card");
  infinitSCrollConatiner.append(divItem);
};

function debounceFunction(fn, delay) {
  let timer = 0;
  return function () {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout((...args) => {
      fn.apply(context, args);
    }, delay);
  };
}

const handleScroll = (e) => {
  console.log("bottom top");
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 10
  ) {
    console.log("bottom");
    page = page + 1;
    fetchData().then((data) => {
      data.map((item) => {
        createCard(item);
      });
    });
  }
};

window.addEventListener("scroll", debounceFunction(handleScroll, 1000));
