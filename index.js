function createPost() {
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);;
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;
  const postAuthor = document.getElementById("postAuthor").value;

  const blogSection = postTemplate({ 'title': postTitle, 'body': postBody, 'poster': postAuthor });

  const postElement = document.getElementById("post");
  postElement.innerHTML += blogSection;
}
