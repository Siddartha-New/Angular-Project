using Newtonsoft.Json;
using Project1.Server.BussinessLayer.Interface;

namespace Project1.Server
{
    public class ArcgisApplication : IBussinessinterface
    {

        Context _ctx = new Context();
        string IBussinessinterface.Delete(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        string IBussinessinterface.fetch(object obj, string classname)
        {
            var data = _ctx.mapview.ToList();
            return JsonConvert.SerializeObject(data);
        }

        string IBussinessinterface.FetchAll(string obj, string classname)
        {
            var data = _ctx.mapview.ToList();
            return JsonConvert.SerializeObject(data);
        }

        string IBussinessinterface.Insert(string obj, string classname)
        {

            if (!string.IsNullOrEmpty(obj))
            {
                var inputProducts = JsonConvert.DeserializeObject<List<MapView>>(obj);
                int startId = 0;


                using (var _ctx = new Context())
                {
                    foreach (var product in inputProducts)
                    {
                        MapView map = new MapView();
                        map.ID = startId++;
                        map.lat = product.lat;
                        map.lon = product.lon;
                        _ctx.mapview.Add(map);
                        _ctx.SaveChanges();
                    }
                    //_ctx.Dispose();
                }

            }
            return null;
        }

        string IBussinessinterface.Search(string obj, string classname)
        {
            throw new NotImplementedException();
        }

        string IBussinessinterface.Update(object obj, string classname)
        {
            throw new NotImplementedException();
        }
    }
}
