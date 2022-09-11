using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Entities;

namespace url_shortener_backend.Helpers;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options):base(options) {  }

    public DbSet<UrlData> UrlDatas { get; set; }
}