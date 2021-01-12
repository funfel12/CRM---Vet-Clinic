using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.PetDtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetController : ControllerBase
    {

        private readonly IPetRepository _repository;

        public PetController(IPetRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddPet(PetAddDTO addDTO)
        {
            Pet pet = new Pet
            {
                CreatedDate = DateTime.UtcNow,
                pet_name = addDTO.pet_name,
                pet_dob = addDTO.pet_dob,
                pet_species = addDTO.pet_species,
                pet_breed = addDTO.pet_breed,
                pet_sex = addDTO.pet_sex,
                pet_color = addDTO.pet_color,
                owner_id = addDTO.owner_id
            };
            await _repository.Add(pet);
            return StatusCode(201);
        }

        [HttpPost("get")]
        public async Task<IActionResult> GetAnimalsByUserId(PetGetDTO PetId)
        {
            var data = await _repository.GetPet(PetId.id);
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteAnimal(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }
        /*
        [HttpPost("update")]
        public async Task<IActionResult> UpdateAnimal(OwnerEditDTO editDT0)
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
        */

    }
}
