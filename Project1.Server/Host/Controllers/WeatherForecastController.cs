using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        var weatherData = new List<WeatherForecast>
        {
            new WeatherForecast { Date = DateTime.Now, TemperatureC = 25, Summary = "Sunny" },
            new WeatherForecast { Date = DateTime.Now.AddDays(1), TemperatureC = 22, Summary = "Cloudy" }
        };

        return Ok(weatherData);
    }
}

public class WeatherForecast
{
    public DateTime Date { get; set; }
    public int TemperatureC { get; set; }
    public string Summary { get; set; }
}
