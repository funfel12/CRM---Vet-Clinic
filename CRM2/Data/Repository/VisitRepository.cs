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
    public class VisitRepository : EfRepository<Visit>, IVisitRepository
    {
        public VisitRepository(DataContext context) : base(context) { }

        public async Task<IEnumerable<Visit>> GetVisit(int id)
        {
            return await _context.Set<Visit>().Where(x => x.pet_id == id).ToListAsync();
        }
    }
}
