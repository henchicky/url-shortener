using Microsoft.AspNetCore.Mvc;

namespace url_shortener_backend.Controllers;
[ApiController]
[Route("[controller]")]
public class UrlController : ControllerBase
{
    [HttpGet]
    public IActionResult Get(string url)
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