### `login.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login de Usuário</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h2>Login</h2>

    <form id="loginForm">
        <input type="text" id="usuario" placeholder="Usuário" required>

        <input type="password" id="senha" placeholder="Senha" required>

        <button type="submit">Entrar</button>
    </form>

    <p id="mensagem"></p>
</div>

<script src="script.js"></script>

</body>
</html>
```

---

### `style.css`

```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, Helvetica, sans-serif;
}

body{
    background:#1e293b;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
}

.container{
    background:white;
    padding:30px;
    width:350px;
    border-radius:12px;
    box-shadow:0 0 20px rgba(0,0,0,.2);
}

h2{
    text-align:center;
    margin-bottom:20px;
}

input{
    width:100%;
    padding:12px;
    margin:10px 0;
    border:1px solid #ccc;
    border-radius:8px;
}

button{
    width:100%;
    padding:12px;
    background:#16a34a;
    color:white;
    border:none;
    border-radius:8px;
    cursor:pointer;
    font-size:16px;
}

button:hover{
    background:#15803d;
}

#mensagem{
    margin-top:15px;
    text-align:center;
    font-weight:bold;
}
```

---

### `script.js`

```javascript
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(
        usuarioSalvo &&
        usuario === usuarioSalvo.usuario &&
        senha === usuarioSalvo.senha
    ){
        document.getElementById("mensagem").style.color = "green";
        document.getElementById("mensagem").innerHTML =
        "Login realizado com sucesso!";
    }else{
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").innerHTML =
        "Usuário ou senha incorretos.";
    }

});
```
