using CRM2.Models;
using CRM2.Models.DictModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pet> Pets { get; set; }
        public DbSet<Visit> Visits { get; set; }
        public DbSet<Med> Meds { get; set; }
        public DbSet<Vaccine> Vaccines { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<Vet> Vets { get; set; }
        public DbSet<DicService> DicServices { get; set; }
        public DbSet<DicMed> DicMeds { get; set; }
        public DbSet<DicVaccine> DicVaccines { get; set; }

    }
}
