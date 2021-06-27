<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="newsAdd.jsp"%>
<!DOCTYPE html>
<html class="no-js">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>明日科技有限公司</title>
		<meta name="viewport"
			content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<meta name="renderer" content="webkit">
		<meta http-equiv="Cache-Control" content="no-siteapp">
		<link rel="stylesheet"
			href="css/amazeui.min.css">
		<link rel="stylesheet" href="css/admin.css">


        <script src="js/jquery.min.js"></script>
		<script src="js/amazeui.min.js"></script>

	</head>
	<body>
	<header class="am-topbar admin-header">
		<div class="am-topbar-brand">
			<strong>明日科技</strong>
			<small>后台管理</small>
		</div>

		<button
			class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
			data-am-collapse="{target: '#topbar-collapse'}">
			<span class="am-sr-only">导航切换</span>
			<span class="am-icon-bars"></span>
		</button>

		<div class="am-collapse am-topbar-collapse" id="topbar-collapse">
			<ul
				class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
				<li class="am-dropdown" data-am-dropdown>
					<a class="am-dropdown-toggle" data-am-dropdown-toggle
						href="javascript:;"> <span class="am-icon-users"></span>
						欢迎您 <span class="am-icon-caret-down"></span> </a>
					<ul class="am-dropdown-content">
						<li>
							<a href="login"><span class="am-icon-power-off"></span>
								退出</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		</header>

		<div class="am-cf admin-main">
			<!-- sidebar start -->
			<div class="admin-sidebar am-offcanvas" id="admin-offcanvas">
				<div class="am-offcanvas-bar admin-offcanvas-bar">
					<ul class="am-list admin-sidebar-list">
						<li>
							<a href="/getNewsList" title="新闻管理"><span
								class="am-icon-pencil-square-o"></span> 新闻管理</a>
						</li>

						<li>
							<a href="/getAdminList" title="管理员管理"><span
								class="am-icon-bookmark"></span> 管理员管理</a>
						</li>
					</ul>

					<div class="am-panel am-panel-default admin-sidebar-panel">
						<div class="am-panel-bd">
							<p>
								 公告
							</p>
							<p>
								技术支持：明日科技

							</p>
						</div>
					</div>

				</div>

			</div>
			<!-- sidebar end -->

			<!-- content start -->
			<div class="admin-content">

				<div class="am-cf am-padding">
					<div class="am-fl am-cf">
						<strong>后台管理</strong>/
						<strong>管理员信息</strong>
					</div>
				</div>
				

				<div class="am-g" style="height: 300px">
					<div class="am-u-sm-12">
						<form class="am-form">
							<table
								class="am-table am-table-striped am-table-hover table-main">
								<thead>
									<tr>
										<th class="table-id">
											序号
										</th>
										
										<th class="table-title">
											用户名
										</th>
										<th class="table-title">
											用户密码
										</th>
										<th class="table-title">
											创建时间
										</th>
									</tr>
								</thead>
								<tbody>
                          <c:forEach items="${message}" var="admin">
							  <tr>
								  <td>${admin.adminID}</td>
								  <td>${admin.adminName}</td>
								  <td>${admin.adminPwd}</td>
								  <td>${admin.lastLoginTime}</td>
							  </tr>
						  </c:forEach>
								</tbody>
							</table>
						</form>
					</div>

				</div>
			</div>
			<!-- content end -->

		</div>


		



		<a class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu"
			data-am-offcanvas="{target: '#admin-offcanvas'}"></a>
	<footer>
		<hr>
		<p class="am-padding-left">
			© 2016 明日科技
		</p>
		</footer>

		



		
	</body>
</html>
