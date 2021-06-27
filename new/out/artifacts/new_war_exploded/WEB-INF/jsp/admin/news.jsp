<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="newsAdd.jsp"%>
<%@ include file="newsDel.jsp"%>
<%@ include file="newsEdit.jsp"%>



<!doctype html>
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
						<strong>新闻管理</strong>
					</div>
				</div>
				
				<div class="am-g">

					<div class="am-u-sm-12 am-u-md-6">
						<div class="am-btn-toolbar">
							<div class="am-btn-group am-btn-group-xs">
								<button type="button" class="am-btn am-btn-success"
									data-am-modal="{target: '#new-popup'}">
									<span class="am-icon-plus"></span> 添加新闻
								</button>
							</div>
						</div>
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
											新闻标题
										</th>
										<th class="table-title">
											创建人
										</th>
										<th class="table-author ">
											创建时间
										</th>
										
										<th class="table-author ">
											操作
										</th>
									</tr>
								</thead>
								<tbody>
								<c:forEach items="${news}" var="list">
									<tr>
										<td>${list.newsID}</td>
										<td>${list.newsTitle}</td>
										<td>${list.adminName}</td>
										<td>${list.newsTime}</td>
										<td>
											<a class="am-btn am-btn-primary am-btn-xs edit_btn"
											href="javascript:void(0)"> <span></span> 修改 </a>
											<a class="am-btn am-btn-danger am-btn-xs del-btn"
												href="javascript:void(0)">
											<span></span>删除</a>
										</td>
									</tr>
								</c:forEach>
								</tbody>
							</table>
							<table class="am-table am-table-striped" width="90%"  border="0"
								   align="center" cellpadding="2" cellspacing="0">
								<tr>
							<td width="80%" height="30" class="chinese"><span class="chinese">
				当前第 ${curPage}页/共${totalPages}页,&nbsp;&nbsp;&nbsp;&nbsp;共${totalItems}条记录,&nbsp;&nbsp;&nbsp;
								&nbsp;5条/页

							</span></td>
									<td width="20%">
									<table width="100%" border="0">
										<tr><td><div align="right"><span class="chinese">

				<select id="ipage" name="ipage" class="chinese" onchange="window.location=this.value">
				<option value="" disabled >请选择</option>
					<c:forEach var="i" begin="1" end="${totalPages}">
						<c:if test="${curPage==i}">
						<option value="http://localhost:8080/getNewsList?pageNo=${i}" selected>第${i}页</option>
						</c:if>
						<c:if test="${curPage!=i}">
							<option value="http://localhost:8080/getNewsList?pageNo=${i}">第${i}页</option>
						</c:if>

					</c:forEach>
				</select>
												</span></div>
									</td></tr></table>
										</td></tr></table>
						</form>
					</div>

				</div>
			</div>
			<!-- content end -->

		</div>


		<a class="am-icon-btn am-icon-th-list am-show-sm-only admin-menu"
			data-am-offcanvas="{target: '#admin-offcanvas'}"></a>

		<div class="am-popup" id="edit-popup">
			<div class="am-popup-inner">
				<div class="am-popup-hd">
					<h4 class="am-popup-title">
						修改新闻
					</h4>
					<span data-am-modal-close class="am-close">&times;</span>
				</div>

				<div class="am-popup-bd">
					<form action=""
						  class="am-form" id="edit-msg">
						<fieldset>
							<div class="am-form-group">
								<label for="upd_NewsTitle">
									新闻标题：
								</label>
								<input id="upd_NewsTitle" name="upd_NewsTitle" type="text" maxlength="32"
									   placeholder="请输入新闻标题" data-validation-message="不能为空" required />
							</div>
							<div class="am-form-group">
								<label for="upd_NewsContent">
									新闻内容：
								</label>
								<textarea id="upd_NewsContent" name="upd_NewsContent"  cols="30" rows="10"
										  placeholder="请输入新闻内容" data-validation-message="不能为空" required></textarea>
							</div>
							<input id="newsId" type="hidden" value="">
							<button class="am-btn am-btn-secondary" onclick="updateNew()">
								提交
							</button>
							<button onclick='javascript:$("#edit-popup").modal("close");'
									class="am-btn am-btn-secondary" type="button">
								关闭
							</button>
						</fieldset>
					</form>
				</div>

			</div>
		</div>

		<footer>
		<hr>
		<p class="am-padding-left">
			© 2016 明日科技
		</p>
		</footer>

		
		<script src="js/jquery.min.js"></script>
	    <script src="js/amazeui.min.js"></script>

		<script>
        $(".del-btn").click(function(){
            var NewsId=$(this).parent().parent().find("td:eq(0)").text();
			$('#my-confirm').modal({
                relatedTarget : this,
                onConfirm : function() {
					$.ajax({
                        url: "deleteNews",
                        type: "post",
                        data: {"NewsId":NewsId},
                        success: function () {
                            alert("删除成功");
                        },
                        error: function () {
                            alert("删除失败");
                        }
                    })
				},
                onCancel : function() {
                    console.log("删除失败");
                }
            });
        })


        $(".edit_btn").click(function () {
            var editIdnew=$(this).parent().parent().find("td:eq(0)").text();
            $("#newsId").val(editIdnew);
            $('#edit-popup').modal();
        })


        function updateNew() {
            var  editId=$("#newsId").val();
            var editTitle=$("#upd_NewsTitle").val();
            var editContent=$("#upd_NewsContent").val();
            $.ajax({
                url:"updateNews",
                data:{"editId":editId,"editTitle":editTitle,"editContent":editContent},
                type:"post",
			})
		}

		</script>

	</body>
</html>
