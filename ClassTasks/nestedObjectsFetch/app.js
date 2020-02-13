const getUserPosts = async () => {
  try {
    const users = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then(response => response.json());
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then(response => response.json());
    const userPosts = await users.map(user => {
      return {
        userName: user.name,
        userId: user.id,
        userPosts: [...posts.filter(post => post.userId === user.id)]
      };
    });
    console.log(userPosts);
  } catch (error) {
    console.log(error.message);
  }
};
getUserPosts();
