using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;
using System.Xml;

namespace Project1.Server.BussinessLayer
{
    public class CommponetClass : IBussinessinterface
    {
        public string fetch(object payload)
        {
            List<BusRoutePoint> busRoute = new List<BusRoutePoint>
        {
            new BusRoutePoint { Lat = 20.5937, Lon = 78.9629 },
            new BusRoutePoint { Lat = 20.5950, Lon = 78.9700 },
            new BusRoutePoint { Lat = 20.2100, Lon = 78.9800 },
            new BusRoutePoint { Lat = 20.6300, Lon = 8.910 },
            new BusRoutePoint { Lat = 20.600, Lon = 78.9100 },
            new BusRoutePoint { Lat = 20.6510, Lon = 78.9200 },
            new BusRoutePoint { Lat = 20.6250, Lon = 78.2010 },
            new BusRoutePoint { Lat = 2.6250, Lon = 12.92010 },

            //

        };

            // Convert to JSON string
            string jsonPayload = JsonConvert.SerializeObject(busRoute);


            return jsonPayload.ToString();
        }

        public string Insert(object obj)
        {
            throw new NotImplementedException();
        }

        public string Update(object obj)
        {
            throw new NotImplementedException();
        }
    }
    public class BusRoutePoint
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
    }

}
