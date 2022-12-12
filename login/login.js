function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);
    if(username == "" || password == ""){
      alert("Vui lòng nhập đầy đủ thông tin")
    }
    else if(username == data.name && password == data.password)
    {
      alert("Đăng nhập thành công")
      window.location.href= 'http://localhost:3000'
    }
    else{
     alert("Đăng nhập thất bại")
    }
}