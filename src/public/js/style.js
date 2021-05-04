function checkemail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkNull($id) {
    $id = "#" + $id;
    $($id).focusout(function() {
        if ($(this).val() === "") {
            $(this).addClass("border-danger");
        } else {
            $(this).removeClass("border-danger");
        }
    });
}

function SubCheckNull($id) {
    $form_regis_ip = $("#form_regis div input");
    for ($i = 0; $i < $form_regis_ip.length - 1; $i++) {
        $id = "#" + $form_regis_ip[$i].attributes[2].nodeValue;
        if ($($id).val() === "") {
            $($id).addClass("border-danger");
        }
    }
    for ($i = 0; $i < $form_regis_ip.length - 1; $i++) {
        $id = "#" + $form_regis_ip[$i].attributes[2].nodeValue;
        if ($($id).val() === "") {
            return false;
        }
    }
    return true;
}
$(document).ready(function() {
    $("#regis_CFpass").focusout(function() {
        $pass = $("#regis_pass").val();
        $passa = $("#regis_CFpass").val();
        if ($pass != $passa) {
            $("#regis_CFpass").addClass("border-danger");
        } else {
            $("#regis_CFpass").removeClass("border-danger");
        }
    });
    $form_regis_ip = $("#form_regis div input");
    for ($i = 0; $i < $form_regis_ip.length - 1; $i++) {
        checkNull($form_regis_ip[$i].attributes[2].nodeValue);
    }
    $("#regis_email").focusout(function() {
        if (!checkemail($(this).val())) {
            $("#regis_email").addClass("border-danger");
        } else {
            $("#regis_email").removeClass("border-danger");
        }
    });
});