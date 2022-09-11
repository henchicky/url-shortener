using Microsoft.AspNetCore.WebUtilities;

namespace url_shortener_backend.Entities;

public class UrlData
{
    public int Id { get; set; }
    public string Url { get; set; }
    
    public string ShortUrl { get; set; }
}