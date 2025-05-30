using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Project1.Server
{
    public class LoginSession : IBussinessinterface
    {
        public string Delete(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string fetch(object obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string FetchAll(string obj, string classname)
        {
            var _ctx = new Context();
            string message = string.Empty;
            var details = JsonConvert.DeserializeObject<List<LoginSessionDetails>>(obj);
            if (details.Count() > 0)
            {
                foreach (var items in details)
                {
                    var data = _ctx.loginsessionDetails.Where(c => c.username == items.username).FirstOrDefault();
                    if (data != null)
                    {
                        message = "Data Found";
                    }
                    else
                    {
                        message = "Data Not Found";
                    }

                }
            }
            return message;


        }

        public string Insert(string obj, string classname)
        {

            if (!string.IsNullOrEmpty(obj))
            {
                var data = JsonConvert.DeserializeObject<List<LoginSessionDetails>>(obj);
                int startId = 0;

                using (var _ctx = new Context())
                {
                    foreach (var details in data)
                    {
                        LoginSessionDetails sessionDetails = new LoginSessionDetails();
                        //sessionDetails.Id = startId++;
                        sessionDetails.username = details.username;
                        sessionDetails.password = details.password;
                        _ctx.loginsessionDetails.Add(sessionDetails);
                        _ctx.SaveChanges();
                    }
                }

            }
            return string.Empty;
        }

        public string Search(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
