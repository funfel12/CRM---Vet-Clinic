using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.MedDtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedController : ControllerBase
    {
        private readonly IMedRepository _repository;

        public MedController(IMedRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddMed(MedAddDTO addDT0)
        {
            Med med = new Med
            {
                CreatedDate = DateTime.UtcNow,
                med_name = addDT0.med_name,
                med_description = addDT0.med_description,
                med_dosage_freq = addDT0.med_dosage_freq,
                med_start_date = addDT0.med_start_date,
                med_end_date = addDT0.med_end_date,
                med_category = addDT0.med_category,
                visit_id = addDT0.visit_id

            };
            await _repository.Add(med);
            return StatusCode(201);
        }
        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllMed()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }
        [HttpPost("get")]
        public async Task<IActionResult> GetMedByVisitlId(MedGetDTO medId)
        {
            var data = await _repository.GetMed(medId.id);
            return Ok(data);
        }
        [HttpPost("getbyid")]
        public async Task<IActionResult> GetMetById(MedGetDTO medId)
        { 
            var data = await _repository.GetById(medId.id);
            return Ok(data);
        }
        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteMed(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner(MedEditDTO editDT0)
        {
            Med med = await _repository.GetById(editDT0.Id);
            med.CreatedDate = DateTime.UtcNow;
            med.med_name = editDT0.med_name;
            med.med_description = editDT0.med_description;
            med.med_dosage_freq = editDT0.med_dosage_freq;
            med.med_start_date = editDT0.med_start_date;
            med.med_end_date = editDT0.med_end_date;
            med.med_category = editDT0.med_category;
            med.visit_id = editDT0.visit_id;
            _repository.Update(med);
            return Ok();
        }
    }
}
