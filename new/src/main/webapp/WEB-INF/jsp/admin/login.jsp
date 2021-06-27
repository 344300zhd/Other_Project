<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ page import="javax.imageio.*"%>
<!DOCTYPE html>
<html>
	<head lang="en">
		<meta charset="UTF-8">
		<title>明日科技有限公司</title>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport"
			content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<meta name="format-detection" content="telephone=no">
		<meta name="renderer" content="webkit">
		<meta http-equiv="Cache-Control" content="no-siteapp" />
		<link rel="stylesheet"
			href="css/amazeui.min.css" />
		<style>
		
.header {
	text-align: center;
}

.header h1 {
	font-size: 200%;
	color: #333;
	margin-top: 30px;
}

.header p {
	font-size: 14px;
}
</style>
	</head>
	<body>
		
		<div class="header">
			<div class="am-g">
				<h1>
					明日科技有限公司
				</h1>
			</div>
			<hr />
		</div>
		
		<div class="am-g">
			<div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
				<form action="login.jsp" method="post" class="am-form login-form" onSubmit="return inputCheck()">
					<label for="User">
						用户名:
					</label>
					<!-- 文本输入框  用于输入用户名 -->
					<input type="text" name="User" id="User"  value="">
					<br>
					<label for="Pwd">
						密码:
					</label>
					<!-- 文本输入框  用于输入用户密码-->
					<input type="password" name="Pwd"  id="Pwd"  value="">
					<br>

					<br />
					<div class="am-cf">
					<!-- 文本输入框  隐藏属性-->
					<input name="Action" type="hidden" value="Login">
						<%
							session.setAttribute("Login","Yes");
						%>
					
					<!-- 用于登录提交按钮 -->
					<input type="button" value="登 录" id="save"	class="am-btn am-btn-primary am-btn-sm am-fl" onclick="doLogin()">

					</div>
				</form>
				
			</div>
		</div>
		
	</body>

	<script src="js/jquery.min.js"></script>
	<script src="js/amazeui.min.js"></script>
<script>
function inputCheck() 
{   

    var inputCheck = false;
    if($("#User").val()==="" || $("#Pwd").val()===""){
		alert("用户名或密码不能为空!");
        return false;
	}
    
    return true;
}

function doLogin() {
    var User=$("#User").val();
    var Pwd=$("#Pwd").val();
	$.ajax({
		url:"doLogin",
		data:{"User":User,"Pwd":Pwd},
		type:"post",
		success:function (data) {
		    alert("登录成功");
		    location.href="main";
		},
		error:function (data) {
		    alert("用户账号或者密码不正确");
		    location.href="login";
		}
	})
	
}



</script>
	<!--<![endif]-->
</html>