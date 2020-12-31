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
using CRM2.Dtos.OwnerDtos;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnersController : ControllerBase
    {
        private readonly IOwnerRepository _repository;

        public OwnersController(IOwnerRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddOwner(OwnerAddDTO addDT0)
        {
            Owner owner = new Owner
            {
                CreatedDate = DateTime.UtcNow,
                owner_first_name = addDT0.owner_first_name,
                owner_last_name = addDT0.owner_last_name,
                owner_adress = addDT0.owner_adress,
                owner_city = addDT0.owner_city,
                owner_email = addDT0.owner_email,
                owner_telephone = addDT0.owner_telephone

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

        [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner (OwnerEditDTO editDT0)
        {
            Owner owner = new Owner
            {
                Id = editDT0.Id,
                CreatedDate = DateTime.UtcNow,
                owner_first_name = editDT0.owner_first_name,
                owner_last_name = editDT0.owner_last_name,
                owner_adress = editDT0.owner_adress,
                owner_city = editDT0.owner_city,
                owner_email = editDT0.owner_email,
                owner_telephone = editDT0.owner_telephone

            };
            _repository.Update(owner);

            return Ok();
        }
    }

    
}
