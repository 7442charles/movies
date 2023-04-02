//TODO: REQUEST DATA FORM "GET/FILM" ENDPOINT

const URL = 'http://127.0.0.1:3000/api'

let movies_card = document.getElementById('movie_row')
console.log(movies_card);

fetch(`${URL}/getMovies`)
    .then(response => response.json())
    .then(data => {
        data.forEach(movie => {
            let ticketAvailable = movie.capacity - movie.ticketsold;
            if (ticketAvailable <= 0) {
                ticketAvailable = 'Sold Out'
            } else {
                ticketAvailable = ticketAvailable
            }
            movies_card.innerHTML += 
            `
            <div class="col-xl-4 col-md-6 movies-item ">
                <div class="movies-wrap" id="${movie.id}">
                <img src="${movie.poster}" class="img-fluid" alt="">
                <div class="movies-info">
                    <h4>${movie.title}</h4><!--TODO: DISPLAY MOVIE TITLE HERE-->
                    <p><span class="fw-bold">Runtime:</span>&nbsp;&nbsp; ${movie.runtime}</p> <!--TODO: DISPLAY RUNTIME HERE-->
                    <p><span class="fw-bold">ShowTime:</span>&nbsp;&nbsp; ${movie.showtime}</p> <!-- TODO: DISPLAY SHOWTIME -->
                    <p><span class="fw-bold">Tickets Available:</span>&nbsp;&nbsp; ${ticketAvailable}</p><!--TODO DISPLAY TICKETS HERE-->
                    <p><Span class="fw-bold">Description:</Span><i> ${movie.description}</i></p><!--TODO: DISPLAY MOVIE DESCRIPTION HERE-->
                </div>
                </div>
            </div>
            `
        });
    })