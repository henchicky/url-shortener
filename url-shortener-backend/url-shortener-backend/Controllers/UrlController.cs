using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Entities;
using url_shortener_backend.Helpers;

namespace url_shortener_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UrlController : ControllerBase
{
    private readonly DataContext _context;

    public UrlController(DataContext context)
    {
        _context = context;
    }

    [HttpPost("shorten")]
    public IActionResult Shorten([FromBody] string url)
    {
        if (IsValidUrl(url))
        {
            var shortUrl = shortenUrl(url);
            UrlData urlData = new UrlData
            {
                ShortUrl = shortUrl,
                Url = url
            };
            _context.UrlDatas.Add(urlData);
            _context.SaveChanges();
            return Ok(shortUrl);
        }

        return BadRequest("Invalid Url");
    }

    [HttpPost("getFullPath")]
    public IActionResult GetFullPath([FromBody] string url)
    {
        if (url == "hello")
        {
            var fullpath = "www.youtube.com";
            return Ok(fullpath);
        }

        return NotFound("No such url found");
    }

    private bool IsValidUrl(string url)
    {
        if (url == "hello")
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    private string shortenUrl(string url)
    {
        return "www.youtube.com";
    }

    private async Task<string> getFullUrl(string url)
    {
        var result = await _context.UrlDatas.SingleOrDefaultAsync(x => x.ShortUrl == url);
        if (result != null)
        {
            return result.Url;
        }

        throw new Exception("No such url found");
    }
}