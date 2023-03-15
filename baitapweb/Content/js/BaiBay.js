
$(document).ready()
{
	$.post("/User/GetUser", function (data) {
		
		data.forEach(function (item) {
			return $("#item").append(
				`
				<tr >            		
					<th scope="row">${item.Id}</th>
					<td>${item.UserId}</td>
					<td>${item.Title}</td>
					<td>${item.Body}</td>
				</tr>
				`
			)
		})
	});

	

}






