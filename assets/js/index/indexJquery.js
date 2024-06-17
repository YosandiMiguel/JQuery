$(document).ready(function () {

  let isValit = true;


  //events
  $("#btn-save").on("click", function(){
    createContactType();
  });

  $("#btn-clear").on("click", function(){clear()});


  //Funtions

  function clear()
  {
    $("#name").val("").removeClass("input-error").removeClass("input-success").focus();
    $("#phone").val("").removeClass("input-error").removeClass("input-success");
    $("#contact-type").val("").removeClass("input-error").removeClass("input-success");
  }

  function validation()
  {
    const valueName = $("#name").val();
    const valuePhone = $("#phone").val();
    const valueContactType = $("#contact-type").val();

    if(valueName == "" || valueName == null || valueName == undefined)
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


    if(valuePhone == "" || valuePhone == null || valuePhone == undefined)
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


      if(valueContactType == "" || valueContactType == null || valueContactType == undefined)
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
    if(validation())
    {
      alert("Datos Ok");
      console.log("valid", isValit );
    }else
    {
      alert("Por favor completar todo el formulario");
      console.log("invalid", isValit);
      console.log(valueName);
      
    }
  }

 });


