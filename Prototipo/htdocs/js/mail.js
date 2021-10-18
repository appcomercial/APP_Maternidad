// // code fragment
// var data = {
// 	service_id: 'YOUR_SERVICE_ID',
// 	template_id: 'YOUR_TEMPLATE_ID',
// 	user_id: 'YOUR_USER_ID',
// 	template_params: {
// 		'name': nombre,
// 		'email': email
// 	}
// };

// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
// 	type: 'POST',
// 	data: JSON.stringify(data),
// 	contentType: 'application/json'
// }).done(function() {
// 	alert('Your mail is sent!');
// }).fail(function(error) {
// 	alert('Oops... ' + JSON.stringify(error));
// });
// // code fragment