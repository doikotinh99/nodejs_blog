$(document).ready(function() {
    // regis
    $("#btn_form_regis").click(function() {
        $obj = {
            user_name: $("#regis_userName").val(),
            regis_email: $("#regis_email").val(),
            regis_pass: $("#regis_pass").val(),
            regis_CFpass: $("#regis_CFpass").val(),
            regis_FName: $("#regis_FName").val(),
            regis_LName: $("#regis_LName").val(),
            regis_job: $("#regis_job").val(),
            regis_comp: $("#regis_comp").val(),
            regis_country: $("#regis_country").val()
        }
        $obj = JSON.stringify($obj);
        if (SubCheckNull()) {
            $.post("/regis/checkregis/" + $obj, function(data) {
                if (data == "ok") {
                    alert("Account registration is successful.");
                }
                if (data == "user") {
                    alert("This username has already existed");

                }
            });

        }
    });
    // login
    $("#btn_login").click(function() {
        $data = {
            user_name: $("#login_userName").val(),
            pass: $("#login_pass").val()
        }
        $data = JSON.stringify($data);
        $.post("/login/checklogin/" + $data, function(data) {
            if (data) {
                setCookie("id_user", data, 5);
                location.reload();
            } else {
                $("#login_alert").removeClass("d-none");
            }
        })
    });
});