import { data } from "./data.mjs";

let currentIndex = 0;
const pages = Object.values(data);

export async function createWebsiteElement(pageData) {
  const imgElement = document.createElement("img");
  imgElement.src = pageData.media.src;
  imgElement.alt = pageData.media.alt;
  imgElement.classList.add("carousel-image");

  return imgElement;
}

async function updateWebsiteContent() {
  const currentPage = pages[currentIndex];

  const myWorkContainer = document.getElementById("website-image");

  myWorkContainer.innerHTML = "";

  const imgElement = await createWebsiteElement(currentPage);
  myWorkContainer.appendChild(imgElement);

  document.querySelector(".website-name").textContent = currentPage.title;
  document.querySelector(".website-description").textContent = currentPage.description;
  document.querySelector(".website-link").href = currentPage.link;
  document.querySelector(".website-link").textContent = currentPage.link;
}

updateWebsiteContent();

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % pages.length;
  updateWebsiteContent();
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + pages.length) % pages.length;
  updateWebsiteContent();
});
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

const progressTextElement = document.getElementById("progress-text");

let textToDisplay = "...in development";
let currentText = "";

function animateLoading() {
  progressTextElement.textContent = "";
  currentText = "";
  progressTextElement.classList.remove("typing");

  function typeText() {
    let index = 0;

    const typingInterval = setInterval(() => {
      currentText += textToDisplay[index];
      progressTextElement.textContent = currentText;
      index++;

      if (index === textToDisplay.length) {
        clearInterval(typingInterval);
      }
    }, 130);

    progressTextElement.classList.add("typing");
  }

  setTimeout(() => {
    typeText();
  }, 0);

  setTimeout(() => {
    animateLoading();
  }, 7500);
}

animateLoading();
