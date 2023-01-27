$(document).ready(function () {
  $(".itc-btn").click(function (e) {
    // e.preventDefault();
    // let target = $(this).attr("href");
    // $(target).addClass("itc-modal--active");
  });
  $(".itc-modal").on("click", function (e) {
    if (e.target !== this) return;
    $(this).removeClass("itc-modal--active");
  });
  $(document).on("keyup", function (e) {
    if (e.keyCode == 27) {
      $(".itc-modal").removeClass("itc-modal--active");
    }
  });
  $(".itc-modal__close").on("click", function (e) {
    $(".itc-modal").removeClass("itc-modal--active");
  });

  let telInputs = document.querySelectorAll("input[type='tel']");
  const prefixNumber = (str) => {
    if (str === "7") {
      return "7 (";
    }
    if (str === "8") {
      return "8 (";
    }
    if (str === "9") {
      return "7 (9";
    }
    return "7 (";
  };
  telInputs.forEach(function (input) {
    const placeholder = input.placeholder;
    input.addEventListener("input", () => {
      const value = input.value.replace(/\D+/g, "");
      const numberLength = 11;
      let result;
      if (input.value.includes("+8") || input.value[0] === "8") {
        result = "";
      } else {
        result = "+";
      }
      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          case 4:
            result += ") ";
            break;
          case 7:
            result += "-";
            break;
          case 9:
            result += "-";
            break;
          default:
            break;
        }
        result += value[i];
      }
      input.value = result;
    });
    input.addEventListener("focusin", () => {
      input.placeholder = "+7 (___)___-__-__";
    });
    input.addEventListener("focusout", () => {
      if (input.value == "+" || input.value == "") {
        input.value = null;
        input.placeholder = placeholder;
      }
    });
  });

  $(".itc-cta").submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: "php/mailSimple.php",
      type: "POST",
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function () {
        $(".itc-modal").removeClass("itc-modal--active");
        alert("Форма отправлена!");
      },
    });
  });
});
