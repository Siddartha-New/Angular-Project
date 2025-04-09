namespace Project1.Server.BussinessLayer.Interface
{
    public interface IBussinessinterface
    {
        public string fetch(object obj);
        public string Insert(string obj);
        public string Update(object obj);

        public string Botreply(string obj);
        public string Search(string obj);
        public string FetchAll(string obj);


    }
}
