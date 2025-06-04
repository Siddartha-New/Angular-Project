public class Product
{
    public int Id { get; set; }
    public string name { get; set; }
    public decimal price { get; set; }
    public string image { get; set; }
    public string quantity { get; set; }
}
public class LoginSessionDetails
{
    public int ID { get; set; }
    public string username { get; set; }
    public string password { get; set; }
}
public class MapView
{
    public int ID { get; set; }
    public string lat { get; set; }
    public string lon { get; set; }
}