using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Entities;
using url_shortener_backend.Helpers;

namespace url_shortener_backend.Services;

public class UrlService : IUrlService
{
    private readonly DataContext _context;

    public UrlService(DataContext context)
    {
        _context = context;
    }

    public bool IsValidUrl(string url)
    {
        return Uri.IsWellFormedUriString(url, UriKind.RelativeOrAbsolute);
    }

    public string ShortenUrl(string url)
    {
        var urlData = new UrlData
        {
            Url = url
        };
        _context.UrlDatas.Add(urlData);
        _context.SaveChanges();
        urlData.ShortUrl = WebEncoders.Base64UrlEncode(BitConverter.GetBytes(urlData.Id));
        _context.SaveChanges();
        return urlData.ShortUrl;
    }

    public string GetFullUrl(string url)
    {
        var id = BitConverter.ToInt32(WebEncoders.Base64UrlDecode(url));
        var result = _context.UrlDatas.Find(id);
        
        if (result != null)
        {
            return result.Url;
        }

        throw new Exception("No such url found");
    }
}