window.addEventListener('scroll', function(){
			const header = document.querySelector('header');
			header.classList.toggle("sticky", window.scrollY > 0);
		});


		function toggleMenu(){
			const menuToggle = document.querySelector('.menuToggle');
			const navigation = document.querySelector('.navigation');
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		}
		function reset(){
			document.getElementById("email").innerHTML = "";
			document.getElementById("name").innerHTML = "";
			document.getElementById("textarea").innerHTML = "";
		}

		function buyTicket(){
			
			const name = document.getElementById("name").value;
			const lastname = document.getElementById("lastname").value;
			const time = document.getElementById("time").value;
			const movieTitle = document.getElementById("movieSel").value;
			const ticketsNr = document.getElementById("nrTickets").value;
			const seatNr = document.getElementById("seat").value;
			const row = document.getElementById("row").value;
			const seat = seatNr+""+row;
			const line = "Succesfully reserved:\nName:"+name+" "+lastname+"\nMovie:"+movieTitle+"\n"+ticketsNr+" tickets (starting from" + seat+")\nTime:"+time;

			if (name == "") {
				alert("Please write your name!");
				return false;
			}
			else if(lastname == ""){
				alert("Please write your lastname!");
				return false;
			}
			else if(time == "selected"){
				alert("No time choosen! Please select time!");
				return false;
			}
			else if(movieTitle == "selected"){
				alert("Please select one of the movies!");
				return false;
			}
			else if (seatNr == "Seat") {
				alert("Please select seat number!");
				return false;
			}
			else if (row == "Row") {
				alert("Please select row of the seats!");
				return false;
			}
			
			alert(line);
		}
		function chooseTheMovie(){
			movie = document.getElementById("movie").innerHTML;
			x = document.getElementById("selected").innerText = movie;
			document.getElementById("selected").innerHTML = movie;
			alert(movie+" - "+x);
			
		}
	