using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;
using System.Xml;

namespace Project1.Server.BussinessLayer
{
    public class CommponetClass : IBussinessinterface
    {
        public string botreply(string obj)
        {
            List<BotResponse> response = new List<BotResponse>();
            response.Add(new BotResponse { message = "Test" });

            string botReply = obj.ToLower() switch
            {
                "hello" => "Hello! How can I assist you today?",
                "hi" => "Hi there! What can I do for you?",
                "hey" => "Hey! Need any help?",
                "good morning" => "Good morning! Hope you have a great day!",
                "good afternoon" => "Good afternoon! How's your day going?",
                "good evening" => "Good evening! What can I assist you with?",
                _ => "Hello! How may I help you?"
            };

            return botReply;
        }

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
            return obj.ToString();
        }

        public string search(string obj)
        {
            throw new NotImplementedException();
        }

        public string Update(object obj)
        {

            List<Product> products = new List<Product>
        {
            new Product { Id = 1, name = "Phone", price = 499, image = "assets/Phone.jpg" },
            new Product { Id = 3, name = "Headphones", price = 99, image = "assets/headphone.jpg" },
            new Product { Id = 1, name = "Robot", price = 499, image = "assets/robot.png" },
            new Product { Id = 2, name = "Laptop", price = 1299, image = "assets/laptop.jpg" }
        };

            string jsonPayload = JsonConvert.SerializeObject(products);
            return jsonPayload.ToString();
        }
    }

    #region Private Clasess

    public class BusRoutePoint
    {
        public double Lat { get; set; }
        public double Lon { get; set; }
    }

    public class BotResponse
    {
        public string message { get; set; }
        
    }

    public class Product
    {
        public int Id { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public string image { get; set; }
    }
    #endregion

}
