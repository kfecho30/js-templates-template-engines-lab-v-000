function createPost() {
  const page = document.getElementById('page-template').value;
  const postTemplate = document.getElementById("post-template").value;
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;
  const postAuthor = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'postBody': postBody, 'postAuthor': postAuthor });
  postsDiv.innerHTML += templateHTML;
}
