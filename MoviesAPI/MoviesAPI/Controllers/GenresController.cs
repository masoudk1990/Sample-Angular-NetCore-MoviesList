using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using MoviesAPI.Services;
using System;
using System.Collections.Generic;

namespace MoviesAPI.Controllers
{
    [Route("api/genre")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly IRepository repository;
        private readonly ILogger<GenresController> logger;

        public GenresController(IRepository repository, ILogger<GenresController> logger)
        {
            this.repository = repository;
            this.logger = logger;
        }

        [HttpGet]
        [ResponseCache(Duration = 60)]
        [ServiceFilter(typeof(MyActionFilter))]
        public ActionResult<List<Genre>> Get()
        {
            logger.LogInformation("Getting all genres");
            return repository.GetAllGenres();
        }

        [HttpGet("{Id}")]
        [ServiceFilter(typeof(MyActionFilter))]
        public ActionResult<Genre> Get(int Id) 
        {
            logger.LogDebug("get by Id method executing...");
            var genre = repository.GetGenreById(Id);

            if (genre == null)
            {
                logger.LogWarning($"Genre with Id {Id} not found");
                return NotFound();
            }

            return genre;
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            repository.AddGenre(genre);
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre) => NoContent();

        [HttpDelete]
        public ActionResult Delete() => NoContent();
    }
}