using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
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
            Visit owner = new Visit
            {
                CreatedDate = DateTime.UtcNow,
                visit_date = addDT0.visit_date,
                visit_receipt = addDT0.visit_receipt,
                visit_notes = addDT0.visit_notes,
                med_visit_summary = addDT0.med_visit_summary,
                routine_visit_summary = addDT0.routine_visit_summary,
                visit_category = addDT0.visit_category,
                visit_doctor = addDT0.visit_doctor,
                visit_exam_doc = addDT0.visit_exam_doc,
                pet_id = addDT0.pet_id,
                vet_id = addDT0.vet_id

            };
            await _repository.Add(owner);

            return StatusCode(201);
        }


        [HttpPost("get")]
        public async Task<IActionResult> GetAllOwner()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

       /* [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner(OwnerEditDTO editDT0)
        {
            Owner owner = new Owner
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                visit_date = editDT0.visit_date,
                owner_last_name = editDT0.owner_last_name,
                owner_adress = editDT0.owner_adress,
                owner_city = editDT0.owner_city,
                owner_email = editDT0.owner_email,
                owner_telephone = editDT0.owner_telephone

            };
            _repository.Update(owner);

            return Ok();
        }*/
    }
}
