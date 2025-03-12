using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {

        public IEnumerable<Evento> _evento = new Evento[] {
            new Evento() {
                EventoId = 1,
                Local = "Belo Horizonte",
                DataEvento = "20/08/2021",
                Tema = "Angular e .NET 5",
                QtdPessoas = 250,
                Lote = "1º Lote",
                ImagemURL = "foto.jpg"
            },
            new Evento() {
                EventoId = 2,
                Local = "São Paulo",
                DataEvento = "20/08/2021",
                Tema = "Angular e suas novidades",
                QtdPessoas = 350,
                Lote = "2º Lote",
                ImagemURL = "foto.jpg"
            }
        };

        public EventoController()
        {

        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public Evento GetById(int id)
        {
            return _evento.FirstOrDefault(evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de POST";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de PUT com id = {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de DELETE com id = {id}";
        }
    }
}