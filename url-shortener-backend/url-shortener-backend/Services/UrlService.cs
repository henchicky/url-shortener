﻿using Microsoft.AspNetCore.WebUtilities;
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
            Url = url,
            ShortUrl = Nanoid.Nanoid.Generate(),
        };
        _context.UrlDatas.Add(urlData);
        _context.SaveChanges();
        return urlData.ShortUrl;
    }

    public string GetFullUrl(string url)
    {
        var result = _context.UrlDatas.FirstOrDefault(x => x.ShortUrl == url);
        
        if (result != null)
        {
            return result.Url;
        }
        
        throw new Exception("No such url found");
    }
}