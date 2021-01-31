using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.VaccineDtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VaccineController : ControllerBase
    {
        private readonly IVaccineRepository _repository;
        public VaccineController(IVaccineRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddVacine(VaccineAddDTO addDT0)
        {
            Vaccine vaccine = new Vaccine
            {
                CreatedDate = DateTime.UtcNow,
                vaccine_name = addDT0.vaccine_name,
                vaccine_description = addDT0.vaccine_description,
                vaccine_series_num = addDT0.vaccine_series_num,
                vaccine_date_given = addDT0.vaccine_date_given,
                vaccine_date_expires = addDT0.vaccine_date_expires,
                vaccine_notes = addDT0.vaccine_notes,
                visit_id = addDT0.visit_id
            };
            await _repository.Add(vaccine);
            return StatusCode(201);
        }
        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllVaccine()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }
        [HttpPost("get")]
        public async Task<IActionResult> GetVaccineByVisitlId(VaccineGetDTO vaccineId)
        {
            var data = await _repository.GetVaccine(vaccineId.id);
            return Ok(data);
        }
        [HttpPost("getbyid")]
        public async Task<IActionResult> GetVaccinetById(VaccineGetDTO vaccineId)
        {
            var data = await _repository.GetById(vaccineId.id);
            return Ok(data);
        }
        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteVaccine(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }
        [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner(VaccineEditDTO editDT0)
        {
            Vaccine vaccine = await _repository.GetById(editDT0.Id);
            vaccine.CreatedDate = DateTime.UtcNow;
            vaccine.vaccine_name = editDT0.vaccine_name;
            vaccine.vaccine_description = editDT0.vaccine_description;
            vaccine.vaccine_series_num = editDT0.vaccine_series_num;
            vaccine.vaccine_date_given = editDT0.vaccine_date_given;
            vaccine.vaccine_date_expires = editDT0.vaccine_date_expires;
            vaccine.vaccine_notes = editDT0.vaccine_notes;
            vaccine.visit_id = editDT0.visit_id;
            _repository.Update(vaccine);

            return Ok();
        }

    }
}
