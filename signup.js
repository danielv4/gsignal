


this.signupHTML = function () {
	
	const signupString = `
	<!DOCTYPE html>
	<html>
	<head>
	<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<style>
	.g-menu-43847{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 720px;
		height: 550px;
		top: 100px;
		background: #989898;
		display: -webkit-box;
		border-radius: 4px;
		overflow: hidden;
		box-shadow: 0 0 25px rgb(0 0 0 / 25%);
	}

	body{
		background: #f9f9f9;
	}

	.g-menu-notes-43847{
		position: relative;
		width: 390px;
		height: 100%;
		background: #1a73e8;
	}

	.g-menu-login-43847{
		position: relative;
		width: 330px;
		height: 100%;
		background: white;
	}

	.g-menu-about-g-43847{
		width: 280px;
		height: 410px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: none;
	}

	.g-menu-next-g-43847{
		width: 280px;
		height: 410px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: none;
	}


	.g-menu-icon-67486{
		position: relative;
		top: 0px;
		width: 100px;
		height: 100px;
		left: 0px;
		cursor: pointer;
		background: none;
		background: none;
		margin-right: auto;
		margin-left: auto;
	}

	.g-menu-icon-i-67486{
		width: 90px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index:100;
	}

	.g-menu-text-67486{
		position: relative;
		font-size: 17px;
		font-family: sans-serif;
		text-align: center;
		color: white;
		font-weight: 600;
	}

	.g-menu-text-b-67486{
		position: relative;
		font-size: 14px;
		font-family: sans-serif;
		text-align: center;
		color: #ececec;
		margin-top: 10px;
	}


	.g-menu-header-67486{ 
		font-family: 'Raleway';
		font-size: 24px;
		font-weight: 600;
		font-style: normal;
		line-height: 1.174;
		text-align: center;
		color: #adadad;
	}


	.g-menu-greeting-67486{
		font-family: sans-serif;
		font-size: 16px;
		text-align: center;
		color: #585858;
		margin-top: 50px;
	}


	.g-menu-next-yg-43847{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 200px;
		margin-top: 20px;
		background: none;
		height: auto;
		overflow: hidden;
	}

	.g-menu-input-t-67486{
		margin-top:5px;
		position: relative;
		font-size: 14px;
		font-family: sans-serif;
		text-align: left;
		color: #bbbbbb;
	}

	.g-menu-input-67486{
		position: relative;
		width: 100%;
		height: 35px;
		border: 0px;
		padding: 0px 0px 0px 0px;
		outline: none;
		text-decoration: none;
		-webkit-transition: background 0.5s ease-in;
		-moz-transition: background 0.5s ease-in;
		-o-transition: background 0.5s ease-in;
		border-bottom: 1px solid #e0e0e0;
		background: none;
	}

	.g-menu-p-t-67486{
		position: relative;
		font-size: 12px;
		font-family: sans-serif;
		text-align: right;
		color: #bbbbbb;
		margin-top: 10px;
		cursor: pointer;
		-webkit-transition: color 0.5s ease-in;
		-moz-transition: color 0.5s ease-in;
		-o-transition: color 0.5s ease-in;
	}

	.g-menu-p-t-67486{
		color: #616161;
	}

	.g-menu-button-t-67486{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 150px;
		height: 34px;
		background: #1a73e8;
		margin-top: 25px;
		border-radius: 40px;
		cursor: pointer;
		-webkit-transition: background 0.5s ease-in;
		-moz-transition: background 0.5s ease-in;
		-o-transition: background 0.5s ease-in;
	}

	.g-menu-button-t-67486:hover{
		background: #5e95de;
	}

	.g-menu-button-t-i-67486{
		position: relative;
		line-height: 34px;
		font-size: 14px;
		font-family: sans-serif;
		text-align: center;
		color: white;
	}

	.g-menu-span-t-67486{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 150px;
		height: 30px;
		background: none;
		display: -webkit-box;
		margin-top: 25px;
	}

	.g-menu-span-t-d-67486{
		position: relative;
		width: 60px;
		height: 100%;
		background: none;
	}

	.g-menu-span-t-i-67486{
		position: relative;
		width: 30px;
		height: 100%;
		background: none;
		position: relative;
		font-size: 14px;
		font-family: sans-serif;
		text-align: center;
		color: #616161;
		cursor: pointer;
		line-height: 30px;
	}

	.g-menu-span-t-m-67486{
		width: 100%;
		height: 2px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: #e8e8e8;
		z-index: 100;
	}

	.g-menu-auth-gmail-67486{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 170px;
		height: 30px;
		background: none;
		margin-top: 10px;
	}

	.g-menu-auth-67486{
		position: absolute;
		top: 0px;
		width: 40px;
		height: 100%;
		left: 0px;
		cursor: pointer;
		background: none;
		margin-right: auto;
		margin-left: auto;
	}

	.g-menu-auth-i-67486{
		width: 20px;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 100;
	}

	.g-menu-auth-text-67486{
		position: absolute;
		font-size: 14px;
		font-family: sans-serif;
		color: #5d5d5d;
		cursor: pointer;
		line-height: 30px;
		left: 40px;
	}

	.g-menu-footer-67486{
		position: relative;
		margin-right: auto;
		margin-left: auto;
		width: 208px;
		height: 20px;
		background: none;
		display: -webkit-box;
		margin-top: 20px;
	}

	.g-menu-footer-t1-67486{
		position: relative;
		font-size: 14px;
		font-family: sans-serif;
		text-align: right;
		color: #888888;
		cursor: pointer;
		padding-right: 4px;
		line-height: 20px;
	}

	.g-menu-footer-t2-67486{
		position: relative;
		font-size: 14px;
		font-family: sans-serif;
		text-align: right;
		color: #888888;
		cursor: pointer;
		line-height: 20px;
		border-bottom: 2px solid #d2d2d2;
	}

	</style>
	</head>
	<body>











	<div class="g-menu-43847" >
		<div class="g-menu-notes-43847" >
			<div class="g-menu-about-g-43847" >
			
				<div class="g-menu-icon-67486" >
					<img class="g-menu-icon-i-67486" src="icon/gke.png" />
				</div>
				<div class="g-menu-text-67486" >Powered By GKE Autopilot</div>
				<div class="g-menu-text-b-67486" >Autopilot is a new mode of operation in Google Kubernetes Engine (GKE) that is designed to reduce the operational cost of managing clusters, optimize your clusters for production, and yield higher workload availability.</div>
			</div>
		</div>
		<div class="g-menu-login-43847" >
			<div class="g-menu-next-g-43847" >
			
				<div class="g-menu-header-67486" >GSignal</div>
				<div class="g-menu-greeting-67486" >Welcome to GSignal</div>
				
				<div class="g-menu-next-yg-43847" >
					<div class="g-menu-input-t-67486" >Email</div>
					<input id="m-email" class="g-menu-input-67486" type="text" placeholder="example@email.com" />
					<div class="g-menu-input-t-67486" >Full name</div>
					<input id="m-name" class="g-menu-input-67486" type="text" placeholder="First Last" />
					<div class="g-menu-input-t-67486" >Username</div>
					<input id="m-username" class="g-menu-input-67486" type="text" placeholder="example10" />
					<div class="g-menu-input-t-67486" >Password</div>
					<input id="m-password" class="g-menu-input-67486" type="Password" placeholder="" />
					<div id="create-button" class="g-menu-button-t-67486" >
						<div class="g-menu-button-t-i-67486" >Sign up</div>
					</div>
				</div>
				<div class="g-menu-footer-67486" >
					<div class="g-menu-footer-t1-67486" >Already have an Account?</div>
					<div id="m-redirect" class="g-menu-footer-t2-67486" >Sign in</div>
				</div>
			</div>
		</div>
	</div>






	<script type="text/javascript">
	$(document).ready(function(){
		
		$("#create-button").click(function() {
		
		
		
			var g_email = $("#m-email").val();
			var g_user = $("#m-username").val();
			var g_fullName = $("#m-name").val();
			var g_password = $("#m-password").val();
			
			var obj = {
				"type":"signup",
				"user":g_user,
				"email":g_email,
				"fullName":g_fullName,
				"password":g_password
			};
			
			console.log(obj);
			
			$.post("/api", obj, function(data, status) {
			
				console.log(JSON.stringify(data));
				
				// reset
				$("#m-email").val("");
				$("#m-username").val("");
				$("#m-name").val("");
				$("#m-password").val("");		
			});
		});
		
		$("#m-redirect").click(function() {
		
			window.location.replace("/signin");
		});	
	});
	</script>
	</body>
	</html>
	`;
	
	return signupString;
}