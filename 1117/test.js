$(document).ready(function() {
    $(".submit").click(function() {
        if($(".id").val()=="") {
            alert("아이디를 입력하세요.");
        }
        else if($(".pw").val()=="") {
            alert("비밀번호를 입력하세요.");
        }
        else if($(".pw").val() != $(".pw1").val()) {
            alert("비밀번호가 다릅니다.")
        }
        else if($(".name").val()=="") {
            alert("이름을 입력하세요.");
        }
        else if($(".email").val()=="") {
            alert("이메일을 입력하세요.");
        }
        else {
            $('.user_id').text($(".id").val());
            $('.user_pw').text($(".pw").val());
            $('.user_name').text( $(".name").val());
            $('.user_email').text($(".email").val());
        }
    });
});