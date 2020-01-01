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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post three", body: "This is post Three" }, getPosts);
