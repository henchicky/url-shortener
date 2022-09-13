using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Helpers;
using url_shortener_backend.Services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DataContext>(opt =>
    opt.UseNpgsql(GetConnectioinString()));
builder.Services.AddScoped<IUrlService, UrlService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();

app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();

string GetConnectioinString()
{
    var envVar = Environment.GetEnvironmentVariable("DATABASE_URL");
    string connectionString;
    if (string.IsNullOrEmpty(envVar))
    {
        connectionString = builder.Configuration.GetConnectionString("UrlShortenerDatabase");
    }
    else
    {
        var uri = new Uri(envVar);
        var username = uri.UserInfo.Split(':')[0];
        var password = uri.UserInfo.Split(':')[1];
        connectionString =
            "; Database=" + uri.AbsolutePath.Substring(1) +
            "; Username=" + username +
            "; Password=" + password +
            "; Port=" + uri.Port +
            "; Host=" + uri.Host +
            "; SSL Mode=Require; Trust Server Certificate=true;";
    }

    return connectionString;
}