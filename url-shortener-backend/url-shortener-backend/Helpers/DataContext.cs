using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Entities;

namespace url_shortener_backend.Helpers;

public class DataContext : DbContext
{
    public DbSet<UrlData> UrlDatas { get; set; }
    public DataContext(DbContextOptions<DataContext> options):base(options) {  }

}