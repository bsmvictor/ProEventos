

namespace ProEventos.Persistence.Contratos
{
    public interface IGeralPersist
    {
        // Método genérico que recebe um tipo T e retorna uma lista de T
        void Add<T>(T entity) where T : class;

        void Update<T>(T entity) where T : class;

        void Delete<T>(T entity) where T : class;

        void DeleteRange<T>(T[] entity) where T : class;

        Task<bool> SaveChangesAsync();

    }
}