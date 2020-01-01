const posts = [
  { title: "Post one", body: "This is body One" },
  { title: "Post Two", body: "This is body Two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong!");
      }
    }, 2000);
  });
}

createPost({ title: "Post three", body: "This is boody three" })
    .then(getPosts)
    .catch((e) => {
        console.log(e);
    })

var pro1 = Promise.resolve("Hello World");
var pro2 = 10;
var pro3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Good bye.")
    }, 1000);
});
const pro4 = fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

Promise.all([pro1, pro2, pro3, pro4]).then(values => {
    console.log(values);
});