function fgpassword(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var password = document.getElementById("password").value;
    var data = JSON.parse(localStorage.getItem(username));
    var user = {
        username: username,
        email: email,
        sdt: sdt,
        password: password,
      };
    if(username == "" || email == "" || sdt == "" || password == ""){
        alert("Vui lòng nhập đầy đủ thông tin")
    }
    else if(username == data.username && email == data.email && sdt == data.sdt)
    {
        var json = JSON.stringify(user);
        localStorage.setItem(username,json);
        alert("Đổi mật khẩu thành công");
        window.location.href="../login/login.html";
    }
    else{
        alert("Thông tin nhập không chính xác")
    }
}