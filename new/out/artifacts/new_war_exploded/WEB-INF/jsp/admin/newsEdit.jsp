<%@ page contentType="text/html; charset=UTF-8" language="java" %>
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
						<input id="upd_NewsTitle" name="upd_NewsTitle" type="text" maxlength="32" value="${IDD}"
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

<script>


	function updateNew() {
       var  editId=${theId};
		var editTitle=$("#upd_NewsTitle").val();
        var editContent=$("#upd_NewsContent").val();
        $.ajax({
            url:"updateNews",
            data:{"editId":editId,"editTitle":editTitle,"editContent":editContent},
            type:"post",
            success:function () {
                alert("更改成功");
            },
            error:function () {
                alert("更改失败");

            }
        })

    }
</script>
</body>
</html>
