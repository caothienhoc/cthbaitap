
$(document).ready()
{
	$.post("/JsonDemo/GetFilmsData", function (data) {
		
		data.forEach(function (value) {
			
			return $("#list-block").append(
					`
					<div class="col-md-4">
						<div style="margin-top:30px;margin-bottom:30px;"class="card">
							<div class="card-header">
								<img style="width:100%;" src="${value.FilmImg}" alt="">
							</div>
							<div class="card-body">
								<h3 id="name-${value.FilmId}">
									${value.FilmName}
								</h3>
								<p id="description-${value.FilmId}">
									${value.FilmDescription} 
								</p>
								<button onclick="handleDeletefilm(${value.FilmId})" class="btn BTN" >delete</button>
					   			<button onclick="handleUpdatefilm(${value.FilmId})" class="btn BTN" data-toggle="modal" data-target="#exampleModal">
								
								   fix
					   			</button>
							</div>
							<div class="card-footer">								
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
						</div>
					</div>
					`
			)
		})
	});

	$('#photo').change(function () {
		const file = this.files[0];
		if (file) {
			let reader = new FileReader();
			reader.onload = function (event) {
				$('.putIMG').attr('src', event.target.result);
			}
			reader.readAsDataURL(file);
		}
	});	

}

	

function UpdateFilmDetail()
{
	/*LoadData();*/
	var film = {}
	film.FilmImg = $(".putIMG").attr("src")
	film.FilmName = $("#inputName").val()
	film.FilmDescription = $("#inputDescription").val()
	film.FilmDate = $("#date").val()
	var objFilm = JSON.stringify(film)

	$.post("/JsonDemo/GetFilmsData",{ abcd: objFilm }, function (data) {

		alert("good");

	})
	
}
