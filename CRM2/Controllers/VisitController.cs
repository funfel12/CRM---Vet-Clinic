using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.PetDtos;
using CRM2.Dtos.VisitDtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VisitController : ControllerBase
    {
        private readonly IVisitRepository _repository;

        public VisitController(IVisitRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddOwner(VisitAddDTO addDT0)
        {
            Visit visit = new Visit
            {
                CreatedDate = DateTime.UtcNow,
                visit_date = addDT0.visit_date,
                visit_notes = addDT0.visit_notes,
                med_visit_summary = addDT0.med_visit_summary,
                visit_category = addDT0.visit_category,
                pet_id = addDT0.pet_id,
                vet_id = addDT0.vet_id

            };
            await _repository.Add(visit);

            return StatusCode(201);
        }


        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllOwner()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }


        [HttpPost("get")]
        public async Task<IActionResult> GetVisitByAnimalId(VisitGetDTO PetId)
        {
            var data = await _repository.GetVisit(PetId.id);
            return Ok(data);
        }

        [HttpPost("getbyid")]
        public async Task<IActionResult> GetVisitById(VisitGetDTO PetId)
        {
            var data = await _repository.GetById(PetId.id);
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

       [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner(VisitEditDTO editDT0)
        {
            Visit visit = await _repository.GetById(editDT0.Id);

            visit.CreatedDate = DateTime.UtcNow;
            visit.visit_date = editDT0.visit_date;
            visit.visit_notes = editDT0.visit_notes;
            visit.med_visit_summary = editDT0.med_visit_summary;
            visit.visit_category = editDT0.visit_category;
            visit.vet_id = editDT0.vet_id;
            _repository.Update(visit);

            return Ok();
        }
    }
}
