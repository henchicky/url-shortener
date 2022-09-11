using Microsoft.AspNetCore.Mvc;

namespace url_shortener_backend.Controllers;
[ApiController]
[Route("[controller]")]
public class UrlController : ControllerBase
{
    private DataContext _dataContext;

    public UrlController(DataContext dataContext)
    {
        _dataContext = dataContext;
    }

    [HttpGet]
    public IActionResult GetFullPath(string url)
    {
        if (url == "hello")
        {
            var fullpath = "www.youtube.com";
            return Ok(fullpath);
        }
        else
        {
            return NotFound("No such url");
        }
    }
    
    [HttpPost]
    public IActionResult Shorten(string url)
    {
        if (url == "hello")
        {
            var fullpath = "www.youtube.com";
            return Ok(fullpath);
        }
        else
        {
            return NotFound("No such url");
        }
    }
}