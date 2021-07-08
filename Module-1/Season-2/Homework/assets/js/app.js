console.log("app.js is active");

// selection element
let btnSubmit = document.getElementById("btn-submit");

// do something if the button click
btnSubmit.addEventListener("click", () => {
  alert("holaa");
});

// Get data from API
const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json"
);
request.send();
request.onload = () => {
  // console.log(request);
  if (request.status === 200) {
    console.log(JSON.parse(request.response));
  } else {
    alert(`error = ${request.response}`);
    // console.log(`error : ${request.response}`);
  }
};
