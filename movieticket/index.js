const container=document.querySelector(".hall");
const seats=document.querySelectorAll(".row .seat");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieSelect=document.getElementById("movies");

populateUI();

let ticketprice=+movieSelect.value;

function setMovieData(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",moviePrice);
}

function updateSelectedCount(){
    const selectedSeats=document.querySelectorAll(".row .seatselected");

    const seatsIndex=[...selectedSeats].map(function(seat){
        return[...seats].indexOf(seat);
    });

localStorage.setItem("selectedseats",JSON.stringify(seatsIndex));

    const selectedSeatsCount=selectedSeats.length;
    count.innerHTML=selectedSeatsCount;
    total.innerHTML=selectedSeatsCount*ticketprice;
}

function populateUI(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(selectedSeats);
    if(selectedSeats !== null && selectedSeats.length>0)
    {
        seats.forEach((seat, index)=>{
            if (selectedSeats.indexOf(index)>-1)
            {
                seat.classList.add("selected");
            }
        })
    }
    const selectedMovieIndex=localStorage.getItem("selectedMovieIndex");
    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex=selectedMovieIndex;
    }
}

movieSelect.addEventListener("change",(e)=>
{
    ticketprice=+e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


container.addEventListener("click",(e)=>
{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("seatoccupied"))
    {
    e.target.classList.toggle("seatselected");
    }

    updateSelectedCount();
})
updateSelectedCount();

// submit_button=document.getElementById("submit_button")
// submit_button.addEventListener("click",()=> {
    


// } )

console.log(selectedSeats.length);