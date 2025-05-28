using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Project1.Server;
using Project1.Server.BussinessLayer.Interface;
using static System.Net.Mime.MediaTypeNames;
using System.Xml.Linq;

namespace Project1.Server
{
    public class InventoryService : IBussinessinterface
    {
        //private readonly Context _context;
        //public InventoryService(Context context)
        //{
        //    _context = context;
        //}
        Context _ctx = new Context();
        #region Product List
        private static List<Product> products = new List<Product>();
        #endregion
        #region CTOR
        public InventoryService()
        {

        }
        #endregion
        public string Botreply(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        public string Delete(string obj, string classname)
        {
            return string.Empty;
        }

        public string fetch(object obj, string classname)
        {
           
            return JsonConvert.SerializeObject(obj);
        }

        public string FetchAll(string obj, string classname)
        {
            return JsonConvert.SerializeObject(products);
        }

        public string Insert(string obj, string classname)
        {

            if (!string.IsNullOrEmpty(obj))
            {
                var inputProducts = JsonConvert.DeserializeObject<List<Product>>(obj);
                int startId = 0;

                
                using (var _ctx = new Context())
                {
                    foreach (var product in inputProducts)
                    {
                        Product prod = new Product();
                        prod.Id = startId++;
                        prod.name = product.name;
                        prod.price = product.price;
                        prod.quantity = product.quantity;
                        prod.image = "Not-There";
                        _ctx.Products.Add(prod);
                        _ctx.SaveChanges();
                    }
                    _ctx.Dispose();
                }
              
            }
            return JsonConvert.SerializeObject(products);
        }


        public string Search(string obj, string classname)
        {
            products = _ctx.Products.ToList();
            return JsonConvert.SerializeObject(products);
        }

        public string Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
