<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<div class="am-popup" id="new-popup">
	<div class="am-popup-inner">
		<div class="am-popup-hd">
			<h4 class="am-popup-title">
				添加新闻
			</h4>
			<span data-am-modal-close class="am-close">&times;</span>
		</div>
		<fieldset>
		<div class="am-popup-bd">
			<form action="" method="post"
				  class="am-form" id="new-msg">

					<div class="am-form-group">
						<label for="newsTitle">
							新闻标题：
						</label>
						<input name="NewsTitle" type="text" maxlength="32" id="newsTitle"
							   placeholder="请输入新闻标题" data-validation-message="不能为空" required />
					</div>
					<div class="am-form-group">
						<label for="newsContent">
							新闻内容：
						</label>
						<textarea name="NewsContent" cols="30" rows="10" id="newsContent"
								  placeholder="请输入新闻内容。段落间请用#分隔。" data-validation-message="不能为空" required></textarea>
					</div>

					<input name="Action" type="hidden" value="Add">

					<input class="am-btn am-btn-secondary" type="button"  value="提交" onclick="addNews()"/>


					<button onclick='javascript:$("#new-popup").modal("close");'
							class="am-btn am-btn-secondary" type="button">
						关闭
					</button>

			</form>
		</div>
		</fieldset>

	</div>
</div>

<script>
    function addNews() {
        var newsTitle=$("#newsTitle").val();
        var newsContent=$("#newsContent").val();
        $.ajax({
            url:"addNews",
			data:{"newsTitle":newsTitle,"newsContent":newsContent},
			type:"post",
			success:function (data) {
                alert("添加成功");
                location.href="news";
			},
			error:function (data) {
				alert("添加失败");
            }

        })

    }
</script>

