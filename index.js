function createPost() {
  const page = _.template(document.getElementById('page-template').innerHTML);
  const postTemplate = _.template(document.getElementById("post-template").innerHTML);;
  const postTitle = document.getElementById('postTitle').value;
  const postBody = document.getElementById('postBody').value;
  const postAuthor = document.getElementById("postAuthor").value;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'postBody': postBody, 'postAuthor': postAuthor });
  postsDiv.innerHTML += templateHTML;
}
