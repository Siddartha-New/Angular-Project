using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Project1.Server
{
    public class Ecommerceservice : IBussinessinterface
    {
        #region Product List
        private static List<Product> products = new List<Product>();
        Context _ctx = new Context();
        #endregion
        public string Delete(string obj, string classname)
        {
            if (!string.IsNullOrEmpty(obj))
            {
                products.RemoveRange(0, products.Count - 1);
            }
            return JsonConvert.SerializeObject(products);
        }

        public string fetch(object obj, string classname)
        {
            return JsonConvert.SerializeObject(obj);
        }

        public string FetchAll(string obj, string classname)
        {
            products = _ctx.Products.ToList();
            return JsonConvert.SerializeObject(products);
        }
        

        public string Insert(string obj, string classname)
        {
            return string.Empty;
        }


        public string Search(string obj, string classname)
        {
            var result = _ctx.Products.ToList();
            return JsonConvert.SerializeObject(result);
        }

        public string Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
