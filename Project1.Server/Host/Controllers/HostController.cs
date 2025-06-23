
using Csla.Server;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Project1.Server;
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
                    instance = new BusinessClass();
                    result = instance.Insert(obj, className);
                    break;
                case "Update":
                    instance = new BusinessClass();
                    result = instance.Update(obj, className);
                    break;
                case "fetch":
                    instance = new BusinessClass();
                    result =  instance.fetch(obj, className);
                    break;
                case "Search":
                    instance = new BusinessClass();
                    result = instance.Search(obj, className);
                    break;
                case "Fetchall":
                    instance = new BusinessClass();
                    result = instance.FetchAll(obj, className);
                    break;
                case "Delete":
                    instance = new BusinessClass();
                    result = instance.Delete(obj, className);
                    break;
            }

        }

        return Ok(result);
    }

}
