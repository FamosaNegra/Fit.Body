$(window).on("load", function () {
  // Preenche o formulário com os dados salvos, se existirem
  // Preenche o formulário com os dados salvos, se existirem
  if (localStorage.getItem("formulario")) {
    var form_data = JSON.parse(localStorage.getItem("formulario"));
    $("input[name=altura]").val(form_data.altura);
    $("input[name=peso]").val(form_data.peso);
    $("input[name=idade]").val(form_data.idade);
    $("input[name=torax]").val(form_data.torax);
    $("input[name=cintura]").val(form_data.cintura);
    $("input[name=quadril]").val(form_data.quadril);
    $("input[name=coxa]").val(form_data.coxa);
    $("input[name=comprimento]").val(form_data.comprimento);
    $("input[name=nome]").val(form_data.nome);
    $("input[name=nome2]").val(form_data.nome);
    $("input[name=email]").val(form_data.email);
    $("input[name=Ombro]").val(form_data.ombro);
    $("input[name=Braço]").val(form_data.braço);
    $("input[name=Biceps]").val(form_data.biceps);
    $("input[name=Busto]").val(form_data.busto);
    $("input[name=genero][value='" + form_data.genero + "']").prop(
      "checked",
      true
    ); // adicionado
  }

  // Salva os dados do formulário no localStorage quando submetido
  $("form").on("submit", function (event) {
    event.preventDefault();
    var form_data = {
      altura: $("input[name=altura]").val(),
      peso: $("input[name=peso]").val(),
      idade: $("input[name=idade]").val(),
      torax: $("input[name=torax]").val(),
      cintura: $("input[name=cintura]").val(),
      quadril: $("input[name=quadril]").val(),
      coxa: $("input[name=coxa]").val(),
      comprimento: $("input[name=comprimento]").val(),
      nome: $("input[name=nome]").val(),
      email: $("input[name=email]").val(),
      ombro: $("input[name=Ombro]").val(),
      braço: $("input[name=Braço]").val(),
      biceps: $("input[name=Biceps]").val(),
      busto: $("input[name=Busto]").val(),
      genero: $("input[name=genero]:checked").val(), // adicionado
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
});
