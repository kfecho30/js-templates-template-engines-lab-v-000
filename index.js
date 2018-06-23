function createPost() {
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;
  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postsDiv = document.getElementById("posts");
  var templateHTML = templateFn({ 'postBody': postBody, 'author': author });
  postsDiv.innerHTML += templateHTML;
}
