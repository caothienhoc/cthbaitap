

$(document).ready(function () {

	$(".nav-link").click(function () {
		$(".nav-link").removeClass("nav-col")
		$(this).addClass("nav-col")
    })
	BindPost();
	$("#nav-click1").click(function () {
		BindPost();
	})
	$("#nav-click2").click(function () {
		BindComments();
	})
	$("#nav-click3").click(function () {
		BindAlbums();
	})
	$("#nav-click4").click(function () {
		BindPhotos();
	})
	$("#nav-click5").click(function () {
		BindTodos();
	})
	$("#nav-click6").click(function () {
		BindUsers();
	})

})

function BindPost() {
	$("#item1").empty();
	$("#item2").empty();
	$("#item1").append(
		`<tr class="REMO">             		
				<th scope="row">Id</th>
				<td>userId</td>
				<td>Title</td>
				<td>Body</td>
			</tr>`
	)
	$.post("/Api/GetPost", function (data) {
		data.forEach(function (item) {
			$("#item2").append(
				`<tr >             		
					<th scope="row">${item.Id}</th>
					<td>${item.userId}</td>
					<td>${item.Title}</td>
					<td>${item.Body}</td>
				</tr>`
			)
		}
		)
	});
}

function BindComments() {
	$("#item1").empty();
	$("#item2").empty();
	$("#item1").append(
		`<tr class="REMO">             		
				<th scope="row">Id</th>
				<td>postId</td>
				<td>Name</td>
				<td>Email</td>
				<td>Body</td>
			</tr>`
	)
	$.post("/Api/GetComments", function (data) {
		data.forEach(function (item) {
			return $("#item2").append(
				`  
				<tr >            		
					<th scope="row">${item.Id}</th>
					<td>${item.postId}</td>
					<td>${item.Name}</td>
					<td>${item.Email}</td>
					<td>${item.Body}</td>
				</tr>
				`
			)
		})
	});
}

function BindAlbums() {
	$("#item1").empty();
	$("#item2").empty();
	$("#item1").append(
		`<tr class="REMO">             		
				<th scope="row">Id</th>
				<td>userID</td>
				<td>title</td>
			</tr>`
	)
	$.post("/Api/GetAlbums", function (data) {
		data.forEach(function (item) {
			return $("#item2").append(
				`  
				<tr >            		
					<th scope="row">${item.Id}</th>
					<td>${item.userId}</td>
					<td>${item.title}</td>
				</tr>
				`
			)
		})
	});
}

function BindPhotos() {
	$("#item1").empty();
	$("#item2").empty();
	$("#item1").append(
		`<tr class="REMO">             		
				<th scope="row">albumId</th>
				<td>id</td>
				<td>title</td>
				<td>url</td>
				<td>thumbnailUrl</td>					
			</tr>`
	)
	$.post("/Api/GetPhotos", function (data) {

		var a = data.length;
		if (a > 100) {
			a = 100;
        }
		for (var i = 0; i < a; i++) {
			var item = data[i]
			$("#item2").append(
				`  
				<tr >            		
					<th scope="row">${item.albumId}</th>
					<td>${item.id}</td>
					<td>${item.title}</td>
					<td><img src="${item.url}"/></td>
					<td><img src="${item.thumbnailUrl}"/></td>
				</tr>
				`
			)
        }
	});
}	

function BindTodos() {
	$("#item1").empty();
	$("#item2").empty();
	$("#item1").append(
		`<tr class="REMO">             		
				<th scope="row">Id</th>
				<td>userID</td>
				<td>title</td>
				<td>completed</td>
			</tr>`
	)
	$.post("/Api/GetTodos", function (data) {
		data.forEach(function (item) {
			return $("#item2").append(
				`  
				<tr >            		
					<th scope="row">${item.id}</th>
					<td>${item.userId}</td>
					<td>${item.title}</td>
					<td>${item.completed}</td>
				</tr>
				`
			)
		})
	});
}

function BindUsers() {
	$("#item1").empty();
	$("#item2").empty();
	$("#addressTitle").empty();
	$("#item1").append(
		`<tr class="REMO">             		
			<th scope="row">Id</th>
			<td>name</td>
			<td>username</td>
			<td>email</td>
			<td colspan="4">address</td>
			<td colspan="3">company</td>
		</tr>`
	)
	/*$("#addressTitle").append(
		`
		<th scope="row">street</th>
		<td scope="row">suite</td>
		<td scope="row">city</td>
		<td scope="row">zipcode</td>	
		`
	)*/
	$.post("/Api/GetNewUsers", function (data) {
		data.forEach(function (item) {
			console.log(item)
			return $("#item2").append(
				`<tr>            		
					<th scope="row">${item.id}</th>
					<td>${item.name}</td>
					<td>${item.username}</td>
					<td>${item.email}</td>
					<td>
						
						${item.address.street}
						<td>${item.address.suite}</td>
						<td>${item.address.city}</td>
						<td>${item.address.zipcode}</td>
					</td>
					<td>
						${item.company.name}
						<td>${item.company.catchPhrase}</td>
						<td>${item.company.bs}</td>
					</td>
				</tr>
				`
			)
		})
	});
}
	