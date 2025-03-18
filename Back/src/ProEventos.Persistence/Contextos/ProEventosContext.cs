using Microsoft.EntityFrameworkCore;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public class ProEventosContext : DbContext
    {
        public ProEventosContext(DbContextOptions<ProEventosContext> options) 
            : base(options) { }
            
        public DbSet<Evento> Eventos { get; set; }
        public DbSet<Lote> Lotes { get; set; }
        public DbSet<Palestrante> Palestrantes { get; set; }
        public DbSet<PalestranteEvento> PalestrantesEventos { get; set; }
        public DbSet<RedeSocial> RedesSociais { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PalestranteEvento>()
                .HasKey(palestranteEvento => new {palestranteEvento.EventoId, palestranteEvento.PalestranteId});
            
            modelBuilder.Entity<RedeSocial>()
                .HasOne(r => r.Evento)
                .WithMany(e => e.RedesSociais)
                .HasForeignKey(r => r.EventoId)
                .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Palestrante>()
                .HasMany(p => p.RedesSociais)
                .WithOne(r => r.Palestrante)
                .OnDelete(DeleteBehavior.Cascade);
        }

    }
}