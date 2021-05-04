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

function setCookie(cname, cvalue, time) {
    var d = new Date();
    d.setTime(d.getTime() + (time * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

function checkCookie(cname) {
    var data = getCookie(cname);
    if (data != "") {
        return data;
    } else {
        return false;
    }
}