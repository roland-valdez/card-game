let html = "";
html += "<div class='d-flex flex-wrap col-md-4 col-lg-3 w-100 p-0'>";

html += "<div class='card w-100 mx-3 my-2'>";
html += "<div class='card-body w-100 card__side card__side--front h-100'>"; //card body front
html += "<h6 class='card-title d-flex justify-content-center w-100'><span></span></h6>";
// html += "<a id='posterImage' class='d-flex justify-content-center' href='#" + movie.id + "'><img class='w-100 h-100' src='" + movie.poster + "'></a>";
html += "</div>";//card body front

html += "<div class='card-body d-flex flex-column justify-content-center card__side card__side--back h-100'>"; //card body back
html += "<h6 class='card-title mb-5 d-flex justify-content-center'><span></span></h6>";
html += "<h6 class='card-subtitle m-0'><ul class='p-0 row'>";
html += "<li class='list-unstyled col-6'><span>Year:</span></li>"
html += "<li class='list-unstyled col-6'><span>Rating:</span></li></h6>"
html += "<h6 class='list-unstyled'><span>Genres:</span> </h6>"
html += "<h6 class=''><span>Director:</span></h6>";
html += "<h6 class=''><span>Actors:</span></h6>"
html += "<h6 class=''><span>Plot:</span></h6>";
html += "</div>"; // card body back

html += "</div>";// card
html += "</div>";// column

$(".load-movies").append(html)