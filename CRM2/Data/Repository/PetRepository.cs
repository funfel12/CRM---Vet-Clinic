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
    public class PetRepository : EfRepository<Pet>, IPetRepository
    {
        public PetRepository(DataContext context) : base(context) 
        { 

        }

        #region method public
        public async Task<IEnumerable<Pet>> GetPet(int id)
        {
            return await _context.Set<Pet>().Where(x => x.owner_id == id).ToListAsync();
        }
        #endregion
    }
}
