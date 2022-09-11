using Microsoft.AspNetCore.Mvc;
using url_shortener_backend.Helpers;
using url_shortener_backend.Services;

namespace url_shortener_backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UrlController : ControllerBase
{
    private readonly IUrlService _urlService;

    public UrlController(DataContext context, IUrlService urlService)
    {
        _urlService = urlService;
    }

    [HttpPost("shortenUrl")]
    public IActionResult ShortenUrl([FromBody] string url)
    {
        if (_urlService.IsValidUrl(url))
        {
            var result = _urlService.ShortenUrl(url);
            return Ok(result);
        }

        return BadRequest("Invalid Url");
    }

    [HttpPost("getFullUrl")]
    public IActionResult GetFullUrl([FromBody] string parsedUrl)
    {
        try
        {
            var result = _urlService.GetFullUrl(parsedUrl);
            return Ok(result);
        }
        catch (Exception)
        {
            return NotFound("No such url found");
        }
    }
}