$(document).ready(function () {

  //variables globales
  let isValit = true;
  let ValueName = "";
  let ValuePhone = "";
  let ValueContactType = "";


  //events
  $("#btn-save").on("click", function(){
    createContactType();
  });

  $("#btn-clear").on("click", function(){clear()});


  //Funtions

  function generateHtmlContact()
  {
    const htmlContact = 
    `
    <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-success text-white">
              <h5 class="card-title">Contacto - ${ValueContactType}</h5>
            </div>

            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Nombre: ${valueName}</li>
                <li class="list-group-item">Telefono: ${valuePhone}</li>
              </ul>
              <button class="btn btn-danger float-end">Eliminar</button>
            </div>
          </div>
        </div>
    `;
    $("#contact-container").append(htmlContact);
  }

  function clear()
  {
    $("#name").val("").removeClass("input-error").removeClass("input-success").focus();
    $("#phone").val("").removeClass("input-error").removeClass("input-success");
    $("#contact-type").val("").removeClass("input-error").removeClass("input-success");
  }

  function validation()
  {

    if(ValueName == "" || ValueName == null || ValueName == undefined)
    {
      isValit = false;
      $("#name").addClass("input-error");
      $("#name").removeClass("input-success");
    }
    else
    {
      isValit = true;
      $("#name").addClass("input-success");
      $("#name").removeClass("input-error");
    }


    if(ValuePhone == "" || ValuePhone == null || ValuePhone == undefined)
      {
        isValit = false;
        $("#phone").addClass("input-error");
        $("#phone").removeClass("input-success");
        
      }
      else
      {
        isValit = true;
        $("#phone").addClass("input-success");
        $("#phone").removeClass("input-error");
      }


      if(ValueContactType == "" || ValueContactType == null || ValueContactType == undefined)
        {
          isValit = false;
          $("#contact-type").addClass("input-error");
          $("#contact-type").removeClass("input-success");
          
        }
        else
        {
          isValit = true;
          $("#contact-type").addClass("input-success");
          $("#contact-type").removeClass("input-error");
        }    
        
        return isValit;
  }

  function createContactType()
  {
    ValueName = $("#name").val();
    ValuePhone = $("#phone").val();
    ValueContactType = $("#contact-type").val();

    if(validation())
    {
      generateHtmlContact();
      clear();
    }else
    {
      alert("Por favor completar todo el formulario");
      
    }
  }

 });


