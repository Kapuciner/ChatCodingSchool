var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public')); // для статических страниц
app.use(express.json()); // разрешаем обмен в формате JSON
app.use(express.urlencoded({ extended: false }));
// обработка AJAX-запроса
app.get('/ajax', function(req, res) {
  console.log(req.query);
  res.send({message:'Привет, '+req.query.name}); // отправляем ответ в формате JSON
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});