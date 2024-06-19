$(document).ready(function () {

  //variables globales
  let isValit = true;
  let ValueName = "";
  let ValuePhone = "";
  let ValueContactType = "";


  //events
  $("#content-container").on("click","#btn-save", function () {
    createContactType();
  });

  $("#content-container").on("click","#btn-clear", function () { clear() });

  $("#content-container").on("click","#btn-back",function()
  {
    generateHtmlForm();
  })

  $("#content-container").on("click","#btn-end",function()
  {
    const mainContainer = $(this).parent().parent().parent();

    $.confirm(
      {
        title:"Esta seguro que desea crear este contacto",
        content:"",
        buttons:
        {
          cancel:
          {
            text: "Cancelar",
            btnClass: "btn btn-success",
            action: function(){},
          },
          confirm:
          {
            text: "Confirmar",
            btnClass: "btn btn-success",
            action: function()
            {
              generateHtmlContact();
              generateHtmlForm();
              clear();
              toastr.success('Se ha creado con exito.','Notificacion',
                {
                  timeOut : 1500,
                })

            },
          },

        },

      })
  })

  $("#contact-container").on("click", ".btn-delete", function () {

    const mainContainer = $(this).parent().parent().parent();

    $.confirm(
      {
        title:"Esta seguro que desea aliminar este contacto",
        content:"",
        buttons:
        {
          cancel:
          {
            text: "Cancelar",
            btnClass: "btn btn-danger",
            action: function(){},
          },
          confirm:
          {
            text: "Confirmar",
            btnClass: "btn btn-success",
            action: function()
            {
              mainContainer.remove();
            },
          },

        },

      })
  });


  //Funtions

  function generateHtmlForm() {
    const htmlForm =
      `        <div class="card">
          <div class="card-header text-white bg-dark">
            <h4 class="text-center">Registre su contactos</h4>
          </div>
          <div class="card-body">
            <div class="card-title">
              <h4 class="text-center">Complete toda la informacion</h4>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">Nombre:</label>
              <input type="text" class="form-control" id="name" />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Telefono:</label>
              <input type="text" class="form-control" id="phone" />
            </div>
            <div class="mb-3" id="radio-container">
              <label for="contact-type" class="form-label">Tipo de contacto:</label>

              <div class="form-check form-check-inline">
                <input clas="form-check-input" type="radio" name="contactType" id="Academico-radio" value="Academico">
                <label for="Academico-radio" class="form-check-label">Academico</label>
              </div>

              
              <div class="form-check form-check-inline">
                <input clas="form-check-input" type="radio" name="contactType" id="work-radio" value="Laboral">
                <label for="Academico-radio" class="form-check-label">Laboral</label>
              </div>

              
              <div class="form-check form-check-inline">
                <input clas="form-check-input" type="radio" name="contactType" id="personal-radio" value="Personal">
                <label for="Academico-radio" class="form-check-label">Personal</label>
              </div>

            </div>
            <button type="button" class="btn btn-outline-primary float-end" id="btn-save">
              Guardar
            </button>
            <button type="button" class="btn btn-outline-warning float-end mr-1" id="btn-clear">
              Limpiar
            </button>
          </div>
        </div>`;
    $("#content-container").html(htmlForm);

    $("#name").val(ValueName);
    $("#phone").val(ValuePhone);
    $(`#radio-container input[type='radio'][value = ${ValueContactType}]`).prop("checked",true);

  }

  function generateHtmlConfirm() {
    const htmlConfirmation =
      `    <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title">Confirmacion</h5>
            </div>

            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipo de contacto: ${ValueContactType}</li>
                <li class="list-group-item">Nombre: ${ValueName}</li>
                <li class="list-group-item">Telefono: ${ValuePhone}</li>
              </ul>
              <button id= "btn-end" class="btn btn-success float-end">Finalizar</button>
              <button id = "btn-back" class="btn btn-danger float-end me-1">Atras</button>
            </div>
          </div>`;
    $("#content-container").html(htmlConfirmation);
  }

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
    ValueName = "";
    ValuePhone = "";
    ValueContactType = "";
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
      generateHtmlConfirm();
    } else {
      toastr.error('Favor completar toda la informacion.','Ooop!! ha ocurrido un error',
        {
          timeOut : 1500,
        })

    }
  }

});


