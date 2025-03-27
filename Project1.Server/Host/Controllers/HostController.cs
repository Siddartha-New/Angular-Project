
using Csla.Server;
using Microsoft.AspNetCore.Mvc;
using Project1.Server.BussinessLayer;
using Project1.Server.BussinessLayer.Interface;

[ApiController]
[Route("[controller]")]
public class HostController : ControllerBase
{
    [HttpGet]
    public IActionResult Get(string className, string obj,string type)
    {
        IBussinessinterface instance = null;
        string result = string.Empty;
        

        if (className != null)
        {
            switch (type)
            {
                case "insert":
                    instance = new CommponetClass();
                    instance.Insert(obj);
                    break;
                case "Update":
                    instance = new CommponetClass();
                    instance.Update(obj);
                    break;
                case "fetch":
                    instance = new CommponetClass();
                    result =  instance.fetch(obj);
                    break;
            }

        }

        return Ok(result);
    }

}
