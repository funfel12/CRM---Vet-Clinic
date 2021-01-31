using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.ServiceDtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;


namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        private readonly IServiceRepository _repository;
        public ServiceController(IServiceRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddService(ServiceAddDTO addDT0)
        {
            Service service = new Service
            {
                CreatedDate = DateTime.UtcNow,
                serv_name = addDT0.serv_name,
                serv_description = addDT0.serv_description,
                med_prescription = addDT0.med_prescription,
                visit_id = addDT0.visit_id
            };
            await _repository.Add(service);
            return StatusCode(201);
        }
        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllService()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }
        [HttpPost("get")]
        public async Task<IActionResult> GetServiceByVisitId(ServiceGetDTO visitId)
        {
            var data = await _repository.GetService(visitId.id);
            return Ok(data);
        }
        [HttpPost("getbyid")]
        public async Task<IActionResult> GetServiceById(ServiceGetDTO serviceId)
        {
            var data = await _repository.GetById(serviceId.id);
            return Ok(data);
        }
        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteService(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }
        [HttpPost("update")]
        public async Task<IActionResult> UpdateService(ServiceEditDTO editDT0)
        {
            Service service = await _repository.GetById(editDT0.Id);
            service.CreatedDate = DateTime.UtcNow;
            service.serv_name = editDT0.serv_name;
            service.serv_description = editDT0.serv_description;
            service.med_prescription = editDT0.med_prescription;
            _repository.Update(service);

            return Ok();
        }
    }
}
