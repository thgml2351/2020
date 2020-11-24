$(document).ready(function(){
    var category, title, writer;
    $("#modalOpenBtn").on("click", function(){
        $(".modalBox").removeClass("hidden");
    }); 

    $(".btn").on("click", function(){
        $(".modalBox").addClass("hidden");
    });

    $("#modalWriteSubmitBtn").on("click", function() {
        category = $("#write-category option:checked").text();
        title = $("#write-title").val();
        writer = $("#write-writer").val();
        
        var now = new Date();
        var year= now.getFullYear();
        var mon = (now.getMonth()+1);
        var day = now.getDate();     
        var date = year + '-' + mon + '-' + day;

        $("#boardTable > tbody:last").append("<tr><td><input type='checkbox'></td><td>"+category+"</td><td>"+title+"</td><td>"+writer+"</td><td>"+date+"</td><td><input type='button' value='수정' class='modifyBtn'><input type='button' value='삭제' class='delBtn'</td></tr>");
    });

    $("#boardTable").on("click", ".delBtn", function() { 
        $(this).parent().parent().remove(); 
    });

    $(".modifyBtn").on("click", function(){
        $(".modalBox").removeClass("hidden");
    });

    $("#checkDelBtn").on("click", function(){
        if($("#checkDelBtn").prop("checked")) {
            $("input[type=checkbox]").prop("checked",true);
          } else {
            $("input[type=checkbox]").prop("checked",false);
          }
    });
})

//남은 기능 = 선택삭제, 수정