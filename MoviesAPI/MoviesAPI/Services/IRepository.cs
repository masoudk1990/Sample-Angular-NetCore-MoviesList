using MoviesAPI.Entities;
using System.Collections.Generic;

namespace MoviesAPI.Services
{
    public interface IRepository
    {
        void AddGenre(Genre genre);
        List<Genre> GetAllGenres();
        Genre GetGenreById(int Id);
    }
}