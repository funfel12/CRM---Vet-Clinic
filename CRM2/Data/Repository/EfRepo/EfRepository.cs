using CRM2.Data.InterfaceRepository.GenericRepository;
using CRM2.Models.BaseEntityModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CRM2.Data.Repository.EfRepo
{
    public class EfRepository<T> : IGenericRepository<T> where T : BaseEntity
    {

        #region Fields

        protected DataContext _context;

        #endregion

        public EfRepository(DataContext context)
        {
            _context = context;
        }

        #region Public Methods


        public Task<T> FirstOrDefault(Expression<Func<T, bool>> predicate)
            => _context.Set<T>().FirstOrDefaultAsync(predicate);

        public async Task Add(T entity)
        {
            // await Context.AddAsync(entity);
            await _context.Set<T>().AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public Task Update(T entity)
        {
            // In case AsNoTracking is used
            _context.Entry(entity).State = EntityState.Modified;
            return _context.SaveChangesAsync();
        }

        public Task Remove(T entity)
        {
            _context.Set<T>().Remove(entity);
            return _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync();
        }

        public async Task<IEnumerable<T>> GetWhere(Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().Where(predicate).ToListAsync();
        }

        public Task<int> CountAll() => _context.Set<T>().CountAsync();

        public Task<int> CountWhere(Expression<Func<T, bool>> predicate)
            => _context.Set<T>().CountAsync(predicate);

        #endregion

    }
}
