using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.DicServiceDtos;
using CRM2.Models.DictModels;
using Microsoft.AspNetCore.Mvc;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DicServiceController : Controller
    {

        private readonly IDicServiceRepository _repository;
        public DicServiceController(IDicServiceRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddDicService(DicServiceAddDTO addDT0)
        {
            DicService service = new DicService
            {
                CreatedDate = DateTime.UtcNow,
                dic_services_name = addDT0.dic_services_name,
                Price = addDT0.Price
            };
            await _repository.Add(service);
            return StatusCode(201);
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetAllDicService()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteDicService(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateDicService(DicServiceEditDTO editDT0)
        {
            DicService service  = new DicService
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                dic_services_name = editDT0.dic_services_name,
                Price = editDT0.Price

            };
            _repository.Update(service);
            return Ok();
        }
    }
}
