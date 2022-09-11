namespace url_shortener_backend.Services;

public interface IUrlService
{
    bool IsValidUrl(string url);
    string GetFullUrl(string url);

    string ShortenUrl(string url);
}