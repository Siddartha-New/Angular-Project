
using Csla.Server;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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

        var re = JsonConvert.SerializeObject(obj);
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
                    result = instance.Botreply(obj);
                    break;
                case "Search":
                    instance = new CommponetClass();
                    result = instance.Search(obj);
                    break;
                case "Fetchall":
                    instance = new CommponetClass();
                    result = instance.FetchAll(obj);
                    break;
                case "Delete":
                    instance = new CommponetClass();
                    result = instance.Delete(obj);
                    break;
            }

        }

        return Ok(result);
    }

}
