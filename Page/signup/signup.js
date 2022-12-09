function signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password_cf = document.getElementById("password_cf").value;
    var email = document.getElementById("email").value;
    var sdt = document.getElementById("sdt").value;
    var user = {
      username: username,
      password: password,
      email: email,
      sdt: sdt,
    };
    if(username == "" || password == "" || email == "" || sdt == "")
    {
      alert("Vui lòng nhập đầy đủ thông tin")
    }
    else if(password != password_cf)
    {
      alert("Mật khẩu xác nhận không trùng khớp")
    }
    else{
      var json = JSON.stringify(user);
      localStorage.setItem(username,json);
      alert("Đăng ký thành công");
      window.location.href="../login/login.html";
    }
}