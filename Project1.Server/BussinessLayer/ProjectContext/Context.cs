using Microsoft.EntityFrameworkCore;

public class Context : DbContext
{
    public DbSet<Product> Products { get; set; }
    public DbSet<LoginSessionDetails> loginsessionDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Project_Siddartha;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False");


    }
}
