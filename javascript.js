$(document).ready(function() {

  var equationDiv = $(".result-div");
  var equation = [];
  var integer = [];
  var done = 0
    
  $(".btn").on("click", function(event) {
    
      if($(event.currentTarget).hasClass("number")){
        integer.push($(this).attr("value"));
        console.log(integer);
      }

      else if($(event.currentTarget).hasClass("operator")){
        var oldJoin = integer.join("");
        var newJoin = parseInt(oldJoin);
        var element = $("<div>");
        var elementSub = $("<div>");

        element.html("<h1>" + newJoin + "<h1>")
        equationDiv.append(element);
        elementSub.html("<h3>" + $(this).attr("value") + "<h3>");
        equationDiv.append(elementSub);

        equation.push(newJoin);
        equation.push($(this).attr("value"));
        integer = [];
        console.log(equation);
      }

      else if($(event.currentTarget).hasClass("equal")){
        var oldJoin = integer.join("");
        var newJoin = parseInt(oldJoin);
        var element = $("<div>");
        var elementSub = $("<div>");

        element.html("<h1>" + newJoin + "<h1>")
        equationDiv.append(element);
        elementSub.html("<h3>" + $(this).attr("value") + "<h3>");
        equationDiv.append(elementSub);

        equation.push(newJoin);
        equation.push($(this).attr("value"));
        integer = [];
        
        while(equation.length > 0){
          
          if(equation.length > 2){
            //take first 3 numbers of array and incorporate operater
            var slice = equation.slice(0,3);
            var sliceNum = 0;
            //replace the 3 numbers with the resulting number.
            if(slice[1] === "+"){
              sliceNum = slice[0]+slice[2];
            }
            else if(slice[1] === "-"){
              sliceNum = slice[0]-slice[2];
            }
            else if(slice[1] === "*"){
              sliceNum = slice[0]*slice[2];
            }
            else if(slice[1] === "/"){
              sliceNum = slice[0]/slice[2];
            }
            else if(slice[1] === "^"){
              sliceNum = slice[0]**slice[2];
            }
            equation.splice(0, 3, sliceNum)
            
            console.log(equation);
          }

          if(equation.length === 2){
            var thefinalanswer = equation[0];
            var elementFinal = $("<div>");
            
            elementFinal.html("<h1>" + thefinalanswer + "<h1>");
            equationDiv.append(elementFinal);
            equation = [];
          }
        }
      }

      else if($(event.currentTarget).hasClass("clear")){
        equation = [];
        $(equationDiv).empty();
      }

  });

});