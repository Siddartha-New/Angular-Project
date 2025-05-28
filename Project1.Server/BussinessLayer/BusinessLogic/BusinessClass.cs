using Newtonsoft.Json;
using Project1.Server;
using Project1.Server.BussinessLayer.Interface;
using System.Reflection;

namespace Project1.Server
{
    public class BusinessClass : IBussinessinterface
    {
        #region Product List
        private static List<Product> products = new List<Product>();
        #endregion
        private IBussinessinterface GetBusinessLogic(string className)
        {
            string fullTypeName = $"Project1.Server.{className}";;
            var type = Assembly.GetExecutingAssembly().GetType(fullTypeName);
            var instance = Activator.CreateInstance(type) as IBussinessinterface;
            return instance;
        }
        #region Interface Methods

        public string Delete(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result = logic.Delete(obj, classname);
            return result;

        }

        public string fetch(object payload, string classname)
        {

            var logic = GetBusinessLogic(classname);
            logic.fetch(payload, classname);
            #region map
            List<BusRoutePoint> busRoute = new List<BusRoutePoint>
            {
                new BusRoutePoint { Lat = 20.5937, Lon = 78.9629 },
                new BusRoutePoint { Lat = 20.5950, Lon = 78.9700 },
                new BusRoutePoint { Lat = 20.2100, Lon = 78.9800 },
                new BusRoutePoint { Lat = 20.6300, Lon = 8.910 },
                new BusRoutePoint { Lat = 20.600, Lon = 78.9100 },
                new BusRoutePoint { Lat = 20.6510, Lon = 78.9200 },
                new BusRoutePoint { Lat = 20.6250, Lon = 78.2010 },
                new BusRoutePoint { Lat = 2.6250, Lon = 12.92010 }
            };
            #endregion

            return JsonConvert.SerializeObject(busRoute);
        }

        public string FetchAll(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result = logic.FetchAll(obj, classname);
            return result;
        }

        public string Insert(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            logic.Insert(obj,classname);

            return JsonConvert.SerializeObject(products);
        }

        public string Search(string obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var result  = logic.Search(obj, classname);

        
            return result;
        }

        public string Update(object obj, string classname)
        {
            var logic = GetBusinessLogic(classname);
            var data = logic.Update(obj, classname);

            return data?.ToString() ?? string.Empty;
        }
        #endregion
    }

    #region Private Classes

    public class BusRoutePoint
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
    }

    public class BotResponse
    {
        public string message { get; set; }
    }

    //public class Product
    //{
    //    public int Id { get; set; }
    //    public string name { get; set; }
    //    public decimal price { get; set; }
    //    public string image { get; set; }
    //}

    #endregion
}
