
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
                    result = instance.Insert(obj);
                    break;
                case "Update":
                    instance = new CommponetClass();
                    result = instance.Update(obj);
                    break;
                case "fetch":
                    instance = new CommponetClass();
                    result =  instance.fetch(obj);
                    break;
                case "botreply":
                    instance = new CommponetClass();
                    result = instance.botreply(obj);
                    break;
                case "search":
                    instance = new CommponetClass();
                    result = instance.search(obj);
                    break;
            }

        }

        return Ok(result);
    }

}
