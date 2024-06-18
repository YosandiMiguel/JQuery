$(document).ready(function () {

  //variables globales
  let isValit = true;
  let ValueName = "";
  let ValuePhone = "";
  let ValueContactType = "";


  //events
  $("#btn-save").on("click", function () {
    createContactType();
  });

  $("#btn-clear").on("click", function () { clear() });

  $("#contact-container").on("click", ".btn-delete", function () {

    if (confirm("Esta seguro que desea aliminar estes contacto")) {
      const mainContainer = $(this).parent().parent().parent();
      mainContainer.remove();
    }
  })


  //Funtions

  function generateHtmlContact() {
    const htmlContact =
      `<div class="col-md-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title">Contacto - ${ValueContactType}</h5>
            </div>

            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Nombre: ${ValueName}</li>
                <li class="list-group-item">Telefono: ${ValuePhone}</li>
              </ul>
              <button class="btn-delete btn btn-danger float-end">Eliminar</button>
            </div>
          </div>
        </div>`;
    $("#contact-container").append(htmlContact);
  }

  function clear() {
    $("#name").val("").removeClass("input-error").removeClass("input-success").focus();
    $("#phone").val("").removeClass("input-error").removeClass("input-success");
    $("#radio-container input[type= 'radio']:checked").prop("checked", false);
    $("#radio-container").removeClass("input-error");
    $("#radio-container").removeClass("input-success");
  }

  function validation() {

    if (ValueName == "" || ValueName == null || ValueName == undefined) {
      isValit = false;
      $("#name").addClass("input-error");
      $("#name").removeClass("input-success");
    }
    else {
      isValit = true;
      $("#name").addClass("input-success");
      $("#name").removeClass("input-error");
    }


    if (ValuePhone == "" || ValuePhone == null || ValuePhone == undefined) {
      isValit = false;
      $("#phone").addClass("input-error");
      $("#phone").removeClass("input-success");

    }
    else {
      isValit = true;
      $("#phone").addClass("input-success");
      $("#phone").removeClass("input-error");
    }


    if (ValueContactType == "" || ValueContactType == null || ValueContactType == undefined) {
      isValit = false;
      $("#radio-container").addClass("input-error");
      $("#radio-container").removeClass("input-success");

    }
    else {
      isValit = true;
      $("#radio-container").addClass("input-success");
      $("#radio-container").removeClass("input-error");
    }

    return isValit;
  }

  function createContactType() {
    ValueName = $("#name").val();
    ValuePhone = $("#phone").val();
    ValueContactType = $("#radio-container input[type= 'radio']:checked").val();

    if (validation()) {
      generateHtmlContact();
      clear();
      toastr.success('El contacto ha sido agregado correctamente','Contacto agregado',
        {
          timeOut : 1500,
        })
    } else {
      toastr.error('Favor completar toda la informacion.','Ooop!! ha ocurrido un error',
        {
          timeOut : 1500,
        })

    }
  }

});


