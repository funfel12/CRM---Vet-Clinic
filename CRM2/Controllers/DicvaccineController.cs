using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.DicVaccineDtos;
using CRM2.Models.DictModels;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    public class DicvaccineController : Controller
    {

        private readonly IDicVaccineRepository _repository;
        public DicvaccineController(IDicVaccineRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddDicVaccine(DicVaccineAddDTO addDT0)
        {
            DicVaccine vaccine = new DicVaccine
            {
                CreatedDate = DateTime.UtcNow,
                dic_vaccines_name = addDT0.dic_vaccines_name,
                Price = addDT0.Price
            };
            await _repository.Add(vaccine);
            return StatusCode(201);
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetAllDicVaccine()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteDicVaccine(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateDicVaccine(DicVaccineEditDTO editDT0)
        {
            DicVaccine vaccine = new DicVaccine
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                dic_vaccines_name = editDT0.dic_vaccines_name,
                Price = editDT0.Price

            };
            _repository.Update(vaccine);
            return Ok();
        }
    }
}
