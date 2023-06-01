    // JavaScript code to handle the dropdown
    var input = document.getElementById("search-input");
    var dropdown = document.getElementById("dropdown");

    // Show or hide the dropdown based on the search input
    input.addEventListener("input", function() {
      var searchValue = input.value.toLowerCase();
      var options = dropdown.getElementsByTagName("h2");

      for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var optionText = option.textContent.toLowerCase();

        if (optionText.indexOf(searchValue) > -1) {
          option.style.display = "";
        } else {
          option.style.display = "none";
        }
      }

      if (searchValue.length > 0) {
        dropdown.classList.add("show");
      } else {
        dropdown.classList.remove("show");
      }
    });

    // Hide the dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
      if (!event.target.matches("#search-input")) {
        dropdown.classList.remove("show");
      }
    });
        // JavaScript code to handle the dropdown
        var input = document.getElementById("search-input");
        var dropdown = document.getElementById("dropdown");
    
        // Show or hide the dropdown based on the search input
        input.addEventListener("input", function() {
          var searchValue = input.value.toLowerCase();
          var options = dropdown.getElementsByTagName("a");
    
          for (var i = 0; i < options.length; i++) {
            var option = options[i];
            var optionText = option.textContent.toLowerCase();
    
            if (optionText.indexOf(searchValue) > -1) {
              option.style.display = "";
            } else {
              option.style.display = "none";
            }
          }
    
          if (searchValue.length > 0) {
            dropdown.classList.add("show");
          } else {
            dropdown.classList.remove("show");
          }
        });
    
        // Hide the dropdown when clicking outside of it
        window.addEventListener("click", function(event) {
          if (!event.target.matches("#search-input")) {
            dropdown.classList.remove("show");
          }
        });