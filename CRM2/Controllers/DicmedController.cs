using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.DicMedDtos;
using CRM2.Dtos.DicVaccineDtos;
using CRM2.Models.DictModels;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class DicmedController : Controller
    {
        private readonly IDicMedRepository _repository;
        public DicmedController(IDicMedRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddDicMed(DicmedAddDTO addDT0)
        {
            DicMed med = new DicMed
            {
                CreatedDate = DateTime.UtcNow,
                dic_meds_name = addDT0.dic_meds_name,
                Price = addDT0.Price
            };
            await _repository.Add(med);
            return StatusCode(201);
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetDicMed()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteDicMed(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateDicMed(DicMed editDT0)
        {
            DicMed med = new DicMed
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                dic_meds_name = editDT0.dic_meds_name,
                Price = editDT0.Price

            };
            _repository.Update(med);
            return Ok();
        }
    }
}

