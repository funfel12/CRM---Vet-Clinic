using CRM2.Data;
using CRM2.Data.Interface;
using CRM2.Data.InterfaceRepository.GenericRepository;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Data.Repository;
using CRM2.Data.Repository.EfRepo;
using CRM2.Models;
using CRM2.Models.DictModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace CRM2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddScoped(typeof(IGenericRepository<>), typeof(EfRepository<>));
            services.AddScoped<IGenericRepository<Med>, MedRepository>();
            services.AddScoped<IGenericRepository<Owner>, OwnerRepository>();
            services.AddScoped<IGenericRepository<Pet>, PetRepository>();
            services.AddScoped<IGenericRepository<Service>, ServiceRepository>();
            services.AddScoped<IGenericRepository<Test>, TestRepository>();
            services.AddScoped<IGenericRepository<Vaccine>, VaccineRepository>();
            services.AddScoped<IGenericRepository<Vet>, VetRepository>();
            services.AddScoped<IGenericRepository<Visit>, VisitRepository>();
            services.AddScoped<IGenericRepository<DicMed>, DicMedRepository>();
            services.AddScoped<IGenericRepository<DicService>, DicServiceRepository>();
            services.AddScoped<IGenericRepository<DicVaccine>, DicVaccineRepository>();

            services.AddScoped<IMedRepository, MedRepository>();
            services.AddScoped<IOwnerRepository, OwnerRepository>();
            services.AddScoped<IPetRepository, PetRepository>();
            services.AddScoped<IServiceRepository, ServiceRepository>();
            services.AddScoped<ITestRepository, TestRepository>();
            services.AddScoped<IVaccineRepository, VaccineRepository>();
            services.AddScoped<IVetRepository, VetRepository>();
            services.AddScoped<IVisitRepository, VisitRepository>();
            services.AddScoped<IDicMedRepository, DicMedRepository>();
            services.AddScoped<IDicServiceRepository, DicServiceRepository>();
            services.AddScoped<IDicVaccineRepository, DicVaccineRepository>();

            services.AddScoped<IAuthRepository, AuthRepository>();


            services.AddDbContext<DataContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
