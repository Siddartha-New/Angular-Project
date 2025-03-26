using Project1.Server.BussinessLayer.Interface;

namespace Project1.Server.BussinessLayer
{
    public class CommponetClass : IBussinessinterface
    {
        public string fetch(object payload)
        {
           
            return payload.ToString();
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
}
