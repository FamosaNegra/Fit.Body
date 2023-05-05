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
    $("input[name=nome]").val(form_data.nome);
    $("input[name=email]").val(form_data.email);


  }

  // Salva os dados do formulário no localStorage quando submetido
  $("form").on("submit", function () {
    var form_data = {
      pescoço: $("input[name=pescoço]").val(),
      peito: $("input[name=peito]").val(),
      cintura: $("input[name=cintura]").val(),
      manga: $("input[name=manga]").val(),
      cintura_baixo: $("input[name=cintura_baixo]").val(),
      quadril: $("input[name=quadril]").val(),
      coxa: $("input[name=coxa]").val(),
      comprimento: $("input[name=comprimento]").val(),
      nome: $("input[name=nome]").val(),
      email: $("input[name=email]").val(),
    };
    localStorage.setItem("formulario", JSON.stringify(form_data));
    alert("Informações salvas com sucesso");
    const currentURL = window.location.href;

    if (window.location.pathname === "/") {
      window.location.href = currentURL + "home";
      return false;
    } else {
      window.location.href = window.location.href;
      return false;
    }
  });

  // Adiciona o comportamento do botão de comparar medidas
  $("#comparar").on("click", function () {
    var form_data = JSON.parse(localStorage.getItem("formulario"));

    // Cria um objeto com as medidas da camisa polo
    var medidas_camisa = {
      P: {
        pescoço: 38,
        peito: 100,
        cintura: 94,
        manga: 62,
      },
      M: {
        pescoço: 40,
        peito: 104,
        cintura: 98,
        manga: 64,
      },
      G: {
        pescoço: 42,
        peito: 108,
        cintura: 102,
        manga: 66,
      },
      GG: {
        pescoço: 44,
        peito: 112,
        cintura: 106,
        manga: 68,
      },
    };

    // Calcula a diferença entre as medidas da camisa e as medidas do usuário
    var diferenca = {};
    var menorDiferenca = Infinity;
    var tamanhoMinimo = null;
    for (var tamanho in medidas_camisa) {
      var medida_camisa = medidas_camisa[tamanho];
      diferenca[tamanho] =
        Math.abs(medida_camisa.pescoço - form_data.pescoço) +
        Math.abs(medida_camisa.peito - form_data.peito) +
        Math.abs(medida_camisa.cintura - form_data.cintura) +
        Math.abs(medida_camisa.manga - form_data.manga);
      if (diferenca[tamanho] < menorDiferenca) {
        menorDiferenca = diferenca[tamanho];
        tamanhoMinimo = tamanho;
      }
    }

    // Ordena os tamanhos por ordem de adequação
    var tamanhos = ["P", "M", "G", "GG"];
    tamanhos.sort(function (a, b) {
      return diferenca[a] - diferenca[b];
    });

    // Adiciona a classe adequada para cada botão de tamanho
    for (var i = 0; i < tamanhos.length; i++) {
      var tamanho = tamanhos[i];
      var botao = $("#" + tamanho);
      if (tamanho === tamanhoMinimo) {
        botao.removeClass("btn-warning btn-danger").addClass("btn-success");
      } else {
        var diferencaRelativa = (diferenca[tamanho] / menorDiferenca) * 100;
        if (diferencaRelativa < 2) {
          botao.removeClass("btn-success btn-danger").addClass("btn-warning");
        } else {
          botao.removeClass("btn-success btn-warning").addClass("btn-danger");
        }
      }
    }
  });
});
