﻿using CRM2.Data.InterfaceRepository.GenericRepository;
using CRM2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Data.RepoInterface.IGenericRepository
{
    public interface IVisitRepository : IGenericRepository<Visit>
    {
        Task<IEnumerable<Visit>> GetVisit(int id);

        Task<IEnumerable<Visit>> GetVisitAllData();
    }
}
