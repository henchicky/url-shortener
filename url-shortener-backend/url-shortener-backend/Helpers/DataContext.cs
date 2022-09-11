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
        options.UseNpgsql(_configuration.GetConnectionString("UrlShortenerDatabase"));
    }

    // public DbSet<User> Users { get; set; }
}