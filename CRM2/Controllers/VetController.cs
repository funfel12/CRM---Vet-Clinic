using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRM2.Data;
using CRM2.Models;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.VetDtos;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VetController : ControllerBase
    {
        private readonly IVetRepository _repository;

        public VetController(IVetRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddOwner(VetAddDTO addDT0)
        {
            Vet vet = new Vet
            {
                CreatedDate = DateTime.UtcNow,
                vet_name = addDT0.vet_name,
                vet_adress = addDT0.vet_adress,
                vet_city = addDT0.vet_city,
                vet_state = addDT0.vet_state,
                vet_zip = addDT0.vet_zip,
                vet_phone = addDT0.vet_phone,
                vet_email = addDT0.vet_email,
                vet_med_rec_site = addDT0.vet_med_rec_site
            };
            await _repository.Add(vet);
            return StatusCode(201);
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetAllVet()
        {
            var data = await _repository.GetAll();
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteVet(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

        [HttpPost("update")]
        public async Task<IActionResult> UpdateVet(VetEditDTO editDT0)
        {
            Vet vet = new Vet
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                vet_name = editDT0.vet_name,
                vet_adress = editDT0.vet_adress,
                vet_city = editDT0.vet_city,
                vet_state = editDT0.vet_state,
                vet_zip = editDT0.vet_zip,
                vet_phone = editDT0.vet_phone,
                vet_email = editDT0.vet_email,
                vet_med_rec_site = editDT0.vet_med_rec_site

            };
            _repository.Update(vet);
            return Ok();
        }
    }
}
