using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using ProEventos.Application;
using ProEventos.Application.Contratos;
using ProEventos.Persistence;
using ProEventos.Persistence.Contratos;

namespace ProEventos.API
 {
     public class Startup
     {
         public Startup(IConfiguration configuration)
         {
             Configuration = configuration;
         }
 
         public IConfiguration Configuration { get; }
 
         
         public void ConfigureServices(IServiceCollection services)
         {
            // Adiciona o DataContext ao container de injeção de dependência
             services.AddDbContext<ProEventosContext>(

                // Configura o DataContext para usar o SQLite como banco de dados
                context => context.UseSqlite(Configuration.GetConnectionString("Default"))
             );

             services.AddControllers()
                 .AddNewtonsoftJson(
                     opt => opt.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
                 );

             services.AddScoped<IEventoService, EventoService>();
             services.AddScoped<IGeralPersist, GeralPersist>();
             services.AddScoped<IEventosPersist, EventoPersist>();

            // Adiciona o CORS ao container de injeção de dependência
             services.AddCors();

             services.AddSwaggerGen(c =>
             {
                 c.SwaggerDoc("v1", new OpenApiInfo { Title = "ProEventos.API", Version = "v1" });
             });
         }
 
         // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
         public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
         {
             if (env.IsDevelopment())
             {
                 app.UseDeveloperExceptionPage();
                 app.UseSwagger();
                 app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "ProEventos.API v1"));
             }
 
             app.UseHttpsRedirection();
 
             app.UseRouting();
 
             app.UseAuthorization();

            // Habilita o CORS
             app.UseCors(access => access.AllowAnyHeader()
                .AllowAnyMethod() // Permite qualquer método
                .AllowAnyOrigin() // Permite qualquer origem
             );
 
             app.UseEndpoints(endpoints =>
             {
                 endpoints.MapControllers();
             });
         }
     }
 }