using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProEventos.API.Models;

namespace ProEventos.API.Data
{
    // DataContext é a classe que representa o banco de dados
    public class DataContext : DbContext
    { 
        // DataContext é um construtor que recebe um objeto do tipo DbContextOptions<DataContext> e passa para a classe base
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        // Eventos é uma propriedade do tipo DbSet<Evento> que representa a tabela Eventos no banco de dados
        public DbSet<Evento> Eventos { get; set; }
    }

}