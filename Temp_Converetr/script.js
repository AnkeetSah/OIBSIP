  // Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // Celsius to Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  // Celsius to Rankine
  function celsiusToRankine(celsius) {
    return ((celsius + 273.15) * 9) / 5;
  }

  // Celsius to Réaumur
  function celsiusToReaumur(celsius) {
    console.log(celsius);
    return (celsius * 4) / 5;
  }

  // Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // Fahrenheit to Kelvin
  function fahrenheitToKelvin(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9 + 273.15;
  }

  // Fahrenheit to Rankine
  function fahrenheitToRankine(fahrenheit) {
    return fahrenheit + 459.67;
  }

  // Fahrenheit to Réaumur
  function fahrenheitToReaumur(fahrenheit) {
    return ((fahrenheit - 32) * 4) / 9;
  }

  // Kelvin to Celsius
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  // Kelvin to Fahrenheit
  function kelvinToFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  }

  // Kelvin to Rankine
  function kelvinToRankine(kelvin) {
    return (kelvin * 9) / 5;
  }

  // Kelvin to Réaumur
  function kelvinToReaumur(kelvin) {
    return ((kelvin - 273.15) * 4) / 5;
  }

  // Rankine to Celsius
  function rankineToCelsius(rankine) {
    return ((rankine - 491.67) * 5) / 9;
  }

  // Rankine to Fahrenheit
  function rankineToFahrenheit(rankine) {
    return rankine - 459.67;
  }

  // Rankine to Kelvin
  function rankineToKelvin(rankine) {
    return (rankine * 5) / 9;
  }

  // Rankine to Réaumur
  function rankineToReaumur(rankine) {
    return ((rankine - 491.67) * 4) / 9;
  }

  // Réaumur to Celsius
  function reaumurToCelsius(reaumur) {
    return (reaumur * 5) / 4;
  }

  // Celsius to Réaumur
  function celsiusToReaumur(celsius) {
    return (celsius * 4) / 5;
  }

  // Réaumur to Fahrenheit
  function reaumurToFahrenheit(reaumur) {
    return (reaumur * 9) / 4 + 32;
  }

  // Fahrenheit to Réaumur
  function fahrenheitToReaumur(fahrenheit) {
    return ((fahrenheit - 32) * 4) / 9;
  }

  // Réaumur to Kelvin
  function reaumurToKelvin(reaumur) {
    return (reaumur * 5) / 4 + 273.15;
  }

  // Réaumur to Rankine
  function reaumurToRankine(reaumur) {
    return (reaumur * 9) / 4 + 491.67;
  }

  const scale1 = document.querySelector("#temperatureScale");
  const scale2 = document.querySelector("#temperatureScale1");
  const val = document.querySelector("#accept");
  const val1 = document.querySelector("#send");
  const btn = document.querySelector("#btn");
  let result;
  btn.addEventListener("click", () => {
    switch (`${scale1.value}-${scale2.value}`) {
      case "celsius-fahrenheit":
       result=(celsiusToFahrenheit(Number(val.value)));
        console.log(result);
        val1.value=result;
        break;
      case "celsius-kelvin":
       result=(celsiusToKelvin(Number(val.value)));
       console.log(result);
       val1.value=result;
        break;
      case "celsius-rankine":
        result=(celsiusToRankine(Number(val.value)));
        console.log(result);
        val1.value=result;
        break;
      case "celsius-reaumur":
       result=(celsiusToReaumur(Number(val.value)));
       console.log(result);
       val1.value=result;
        break;
      case "fahrenheit-celsius":
        result = fahrenheitToCelsius(Number(val.value));
        console.log(result);
        val1.value=result;
        break;
      case "fahrenheit-kelvin":
        result = fahrenheitToKelvin(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "fahrenheit-rankine":
        result = fahrenheitToRankine(Number(val.value));
        console.log(result);
        val1.value=result;
        break;
      case "fahrenheit-reaumur":
        result = fahrenheitToReaumur(Number(val.value));
        console.log(result);
        val1.value=result;
        break;
      case "kelvin-celsius":
        result = kelvinToCelsius(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "kelvin-fahrenheit":
        result = kelvinToFahrenheit(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "kelvin-rankine":
        result = kelvinToRankine(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "kelvin-reaumur":
        result = kelvinToReaumur(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "rankine-celsius":
        result = rankineToCelsius(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "rankine-fahrenheit":
        result = rankineToFahrenheit(Number(val.value));
        console.log(result);
        val1.value=result;
        break;
      case "rankine-kelvin":
        result = rankineToKelvin(Number(val.value));
        console.log(result);
        val1.value=result;
        break;

      case "rankine-reaumur":
        result = rankineToReaumur(Number(val.value));

        console.log(result);
        val1.value=result;
        break;

      case "reaumur-celsius":
        result = reaumurToCelsius(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "reaumur-fahrenheit":
        result = reaumurToFahrenheit(Number(val.value));
        console.log(result);
        val1.value=result;
        break;
      case "reaumur-kelvin":
        result = reaumurToKelvin(Number(val.value));

        console.log(result);
        val1.value=result;
        break;
      case "reaumur-rankine":
        result = reaumurToRankine(Number(val.value));

        console.log(result);
        val1.value=result;
        break;

      // Add more cases for other conversions if needed
      default:
        console.log("Invalid conversion");
        alert("Both Temperature Scale Cannot be Same")
    }
  });