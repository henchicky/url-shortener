using NUnit.Framework;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using url_shortener_backend.Helpers;
using url_shortener_backend.Services;

namespace url_shortener_backend.unit_tests;

[TestFixture()]
public class UrlServiceTest
{
    private IUrlService _urlService;
    private DbContextOptions<DataContext> options;
    private DataContext _context;

    [SetUp]
    public void Setup()
    {
        options = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: "UrlDateDataBase")
            .Options;
        _context = new DataContext(options);
        _urlService = new UrlService(_context);
    }

    [TestCase("www.y outube.com")]
    [TestCase("youtube")]
    public void IsValidUrl_InvalidUrl_ReturnsFalse(string url)
    {
        var result = _urlService.IsValidUrl(url);
        result.Should().BeFalse();
    }

    [TestCase("http://www.youtube.com")]
    [TestCase("https://www.google.com")]
    [TestCase("www.youtube.com")]
    [TestCase("google.com")]
    public void IsValidUrl_ValidUrl_ReturnsTrue(string url)
    {
        var result = _urlService.IsValidUrl(url);
        result.Should().BeTrue();
    }

    [Test]
    public void GetFullUrl_InalidUrl_ThrowsException()
    {
        var urlToShorten = "www.google.com";
        _urlService.ShortenUrl(urlToShorten);
        Action act = () => _urlService.GetFullUrl("invalidUrl");

        act.Should().Throw<Exception>().WithMessage("No such url found");
    }

    [Test]
    public void GetFullUrl_ValidShortUrl_ReturnsFullPath()
    {
        var urlToShorten = "www.google.com";
        var shortenUrl = _urlService.ShortenUrl(urlToShorten);
        var fullUrl = _urlService.GetFullUrl(shortenUrl);
        fullUrl.Should().Be(urlToShorten);
    }

    [Test]
    public void ShortenUrl_Url_InsertIntoDb()
    {
        var urlToShorten = "www.google.com";
        var shortenUrl = _urlService.ShortenUrl(urlToShorten);
        var urlData = _context.UrlDatas.First(x => x.ShortUrl == shortenUrl);

        urlData.Should().NotBeNull();
    }
}