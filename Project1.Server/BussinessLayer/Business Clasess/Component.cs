using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Project1.Server.BussinessLayer
{
    public class CommponetClass : IBussinessinterface
    {
        #region Product List
        private static List<Product> products = new List<Product>();
        #endregion

        public string Botreply(string obj)
        {
            string botReply = obj?.ToLower() switch
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

        public string Delete(string obj)
        {
            if (!string.IsNullOrEmpty(obj))
            {
                
            }
            return JsonConvert.SerializeObject(products);

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
                new BusRoutePoint { Lat = 2.6250, Lon = 12.92010 }
            };

            return JsonConvert.SerializeObject(busRoute);
        }

        public string FetchAll(string obj)
        {
            return JsonConvert.SerializeObject(products);
        }

        public string Insert(string obj)
        {
            if (!string.IsNullOrEmpty(obj))
            {
                var inputProducts = JsonConvert.DeserializeObject<List<Product>>(obj);
                int startId = products.Count + 1;

                foreach (var product in inputProducts)
                {
                    products.Add(new Product
                    {
                        Id = startId++,
                        name = product.name,
                        price = product.price,
                        image = product.image
                    });
                }
            }

            return JsonConvert.SerializeObject(products);
        }

        public string Search(string obj)
        {
            if (!string.IsNullOrEmpty(obj))
            {
                var result = products.FirstOrDefault(p =>
                    p.name.Equals(obj, StringComparison.OrdinalIgnoreCase));

                if (result != null)
                    return JsonConvert.SerializeObject(result);
            }

            return string.Empty;
        }

        public string Update(object obj)
        {
            return obj?.ToString() ?? string.Empty;
        }
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

    public class Product
    {
        public int Id { get; set; }
        public string name { get; set; }
        public decimal price { get; set; }
        public string image { get; set; }
    }

    #endregion
}
