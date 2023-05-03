$(window).on("load", function () {
    // Preenche o formulário com os dados salvos, se existirem
    if (localStorage.getItem("formulario")) {
      var form_data = JSON.parse(localStorage.getItem("formulario"));
      $("input[name=pescoço]").val(form_data.pescoço);
      $("input[name=peito]").val(form_data.peito);
      $("input[name=cintura]").val(form_data.cintura);
      $("input[name=manga]").val(form_data.manga);
      $("input[name=cintura_baixo]").val(form_data.cintura_baixo);
      $("input[name=quadril]").val(form_data.quadril);
      $("input[name=coxa]").val(form_data.coxa);
      $("input[name=comprimento]").val(form_data.comprimento);
    }
  
    // Salva os dados do formulário no localStorage quando submetido
    $("form").on("submit", function (event) {
      event.preventDefault();
      var form_data = {
        pescoço: $("input[name=pescoço]").val(),
        peito: $("input[name=peito]").val(),
        cintura: $("input[name=cintura]").val(),
        manga: $("input[name=manga]").val(),
        cintura_baixo: $("input[name=cintura_baixo]").val(),
        quadril: $("input[name=quadril]").val(),
        coxa: $("input[name=coxa]").val(),
        comprimento: $("input[name=comprimento]").val(),
      };
      localStorage.setItem("formulario", JSON.stringify(form_data));
      alert("Informações salvas corretamente.");
      location.href = "/";
    });
  });
  