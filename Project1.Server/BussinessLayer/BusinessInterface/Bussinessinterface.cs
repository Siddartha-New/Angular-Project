namespace Project1.Server.BussinessLayer.Interface
{
    public interface IBussinessinterface
    {
        public string fetch(object obj,string classname);
        public string Insert(string obj,string classname);
        public string Update(object obj, string classname);
        public string Search(string obj, string classname);
        public string FetchAll(string obj, string classname);

        public string Delete(string obj, string classname);


    }
}
