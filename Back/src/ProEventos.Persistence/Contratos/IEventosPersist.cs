using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventosPersist
    {
        
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includePalestrantes = false);
         Task<Evento[]> GetAllEventosAsync(bool includePalestrantes = false);
         Task<Evento> GetEventoByIdAsync(int eventoId, bool includePalestrantes = false);

    }
}