function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6lj5BtkdLpt":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwvqbEG6WZqdWKbLx0A1aNByt9I2H-jidP_LDGhBRjC9EP_PaDjzqWemLEZk0w4GMy_Hw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

