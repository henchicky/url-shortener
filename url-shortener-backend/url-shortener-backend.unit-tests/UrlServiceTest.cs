using NUnit.Framework;
using url_shortener_backend.Services;

namespace url_shortener_backend.unit_tests;

[TestFixture()]
public class UrlControllerTest
{
    private IUrlService _urlService;
    
    [SetUp]
    public void Setup()
    {
        // _urlService
    }

    [TestCase("123456")]
    public void GetFullUrl_ValidString_ReturnsFullPath(string url)
    {
        //Arrange
        _urlService.GetFullUrl(url);

        //Act

        //Assert
    }
    
    [TestCase("invalidurl")]
    public void GetFullUrl_InalidString_ThrowsError(string url)
    {
        //Arrange
        _urlService.GetFullUrl(url);
        //Act

        //Assert
    }
    
    [TestCase("http://www.youtube.com")]
    [TestCase("https://www.google.com/search?q=localhost+url&sxsrf=ALiCzsa8W6RYWssRSpDybjhbKeAnXtgV0g%3A1663070021281&ei=RW8gY77eEJjD3LUP_Nme6AE&oq=local&gs_lcp=Cgdnd3Mtd2l6EAMYADIECAAQQzIKCAAQsQMQgwEQQzIFCAAQkQIyBAgAEEMyCwgAEIAEELEDEIMBMg4IABCABBCxAxCDARDJAzIFCAAQkgMyBQgAEJIDMgUIABCABDILCAAQgAQQsQMQgwE6BAgjECc6EQguEIAEELEDEIMBEMcBENEDOgsILhCABBCxAxCDAToICC4QsQMQgwE6CAgAELEDEIMBOg4ILhCABBCxAxCDARDUAjoLCC4QgAQQxwEQ0QM6BQgAELEDOgUILhCABDoLCC4QgAQQsQMQ1AI6CAgAEIAEELEDSgQIQRgASgQIRhgAUABYywNgnA5oAHABeACAAXyIAaMDkgEDNC4xmAEAoAEBwAEB&sclient=gws-wiz")]
    public void ShortenUrl_ValidUrl_ReturnsShortenPath(string url)
    {
        //Arrange
        _urlService.ShortenUrl(url);
        //Act

        //Assert
    }
    
    [TestCase("www.y outube.com")]
    [TestCase("youtube")]
    [TestCase("you,tube.com")]
    [TestCase("youtube.com")]
    public void ShortenUrl_InvalidUrl_ThrowsError(string url)
    {
        //Arrange
        _urlService.ShortenUrl(url);

        //Act

        //Assert
    }

    private string InsertUrlIntoDb()
    {
        return String.Empty;
    }

    [TearDown]
    public void CleanUp()
    {
    }

}