using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Data.Repository.EfRepo;
using CRM2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Data.Repository
{
    public class VaccineRepository : EfRepository<Vaccine>, IVaccineRepository
    {
        public VaccineRepository(DataContext context) : base(context) { }

        public async Task<IEnumerable<Vaccine>> GetVaccine(int id)
        {
            return await _context.Set<Vaccine>().Where(x => x.visit_id == id).ToListAsync();
        }
    }
}