function createPost() {
  var post = document.getElementById("postBody").value;
  var author = document.getElementById("postAuthor").value;

  //insert comment into "comments" div in this format:
  //<div class="comment"><p>comment</p><p>Posted By: <span class="commenter">commenter</span></p></div>

  //create template string - THIS IS THE ONLY LINE WE HAVE TO CHANGE
  //var commentTemplate = '<div class="comment"><p><%= comment %></p><p>Posted By: <span class="commenter"><%= commenter %></span></p></div>';
  var postTemplate = document.getElementById("post-template").innerHTML;

  //create template function
  var templateFn = _.template(postTemplate);

  var postsDiv = document.getElementById("posts");

  //execute template function with JSON object for the interpolated values
  var templateHTML = templateFn({ 'postBody': postBody, 'author': author });

  //append rather than replace!
  postsDiv.innerHTML += templateHTML;
}
