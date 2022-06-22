const container = document.querySelector(".container");
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll(".seat:not(.reserved)"); 

getFromLocalStorage();
calculateTotal();


container.addEventListener('click', function(e){
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();    
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
})

function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".seat.selected");
    
    const selectedSeatArr = [];
    const seatArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatArr.push(seat);
    });
    // spread
    seats.forEach(function(seat){
        seatArr.push(seat);
    })

    let selectedSeatIndex = selectedSeatArr.map(function(seat) {
        return seatArr.indexOf(seat);       
    })

    


    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndex);
}

function saveToLocalStorage(index){
    localStorage.setItem('selectedSeats', JSON.stringify(index));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    
    if(selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if (selectedSeats.indexOf(index)> -1) {
                seat.classList.add("selected");
            }
        })
    }
    
    
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null){
        select.selectedIndex = selectedMovieIndex;
    }

}