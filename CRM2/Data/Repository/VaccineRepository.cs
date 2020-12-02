using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Data.Repository.EfRepo;
using CRM2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Data.Repository
{
    public class VaccineRepository : EfRepository<Vaccine>, IDicVaccineRepository
    {
        public VaccineRepository(DataContext context) : base(context) { }
    }
}