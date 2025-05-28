namespace Project1.Server.BussinessLayer.ProjectContext
{
    public class Dbdetails
    {
        private readonly IConfiguration _config;
        public void GetDbName(string code)
        {
           var configdetails =  _config["appsettings.json"];
        }
    }
}
