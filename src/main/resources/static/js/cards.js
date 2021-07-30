

let html = "";
html += "<div class='d-flex align-items-center justify-content-center w-100'>";

html += "<div class='card my-2 >";

html += "<div class='card-body'>";
html += "<h5 class='card-title d-flex justify-content-center'><span>" + omdbMovie.title + "</span></h5>";
html += "<h6 class='card-subtitle m-0'><ul class='p-0 row'>";
html += "<li class='list-unstyled col-6'><span>Year:</span> " + omdbMovie.year + "</li>"
html += "<li class='list-unstyled col-6 d-flex justify-content-end'><span>Rating:</span> " + omdbMovie.rating + "/10</li></h6>";
html += "<a class='d-flex justify-content-center mb-2' href='#'><img class='mb-1 w-100 position-relative' src='" + omdbMovie.poster + "'></a>";
html += "<h6 class='list-unstyled'><span>Genres:</span> " + omdbMovie.genre + "</h6>";
html += "<h6 class=''><span>Director:</span> " + omdbMovie.director + "</h6>";
html += "<h6 class=''><span>Actors:</span> " + omdbMovie.actors + "</h6>";
html += "<h6 class=''><span>Plot:</span> " + omdbMovie.plot + "</h6>";
html += "<h6 class='d-flex justify-content-center mt-4'><span>Is this the movie you searched for?</span></h6>";
html += "<div class='row d-flex justify-content-center'>";
html += "<button class=' btn btn-outline-success mr-1 mb-3 ' id='cancelSearchedMovie'>Cancel</button>";
html += "<button class=' btn btn-outline-success ml-1 mb-3 ' id='addSearchedMovie'>Add to Collection</button>";
html += "</div></div></div></div>";