using Microsoft.EntityFrameworkCore;

namespace url_shortener_backend;

public class DataContext : DbContext
{
    private readonly IConfiguration _configuration;

    public DataContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)
    {
        // connect to postgres with connection string from app settings
        options.UseNpgsql(_configuration.GetConnectionString("WebApiDatabase"));
    }

    // public DbSet<User> Users { get; set; }
}