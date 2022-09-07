using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using CRM2.Data.RepoInterface.IGenericRepository;
using CRM2.Dtos.PetDtos;
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
            Visit visit = new Visit
            {
                CreatedDate = DateTime.UtcNow,
                visit_date = addDT0.visit_date,
                visit_notes = addDT0.visit_notes,
                med_visit_summary = addDT0.med_visit_summary,
                visit_category = addDT0.visit_category,
                pet_id = addDT0.pet_id,
                vet_id = addDT0.vet_id

            };
            await _repository.Add(visit);


            var data = await _repository.GetVisitAllData();

            Owner owner = data.Where(x => x.pet_id == addDT0.pet_id).Select(x => x.Pet).Select(x=>x.Owner).FirstOrDefault();
            var fromAddress = new MailAddress("mgolas1234@gmail.com", "Wizyta weterynaryjna");
            var toAddress = new MailAddress(owner.owner_email, "To Name");
            const string fromPassword = "*";
            const string subject = "test";
            string body = "Witaj "+ owner.owner_first_name+" "+owner.owner_last_name+"!"+" Masz umówiona wizyte dnia i o godzinie: "+ addDT0.visit_date.ToString("yyyy-MM-dd HH:mm:ss")+" W naszej klinice";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword),
                Timeout = 20000
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }

            return StatusCode(201);
        }


        [HttpPost("getAll")]
        public async Task<IActionResult> GetAllVisits()
        {
            var data = await _repository.GetVisitAllData();
            return Ok(data);
        }


        [HttpPost("get")]
        public async Task<IActionResult> GetVisitByAnimalId(VisitGetDTO PetId)
        {
            var data = await _repository.GetVisit(PetId.id);
            return Ok(data);
        }

        [HttpPost("getbyid")]
        public async Task<IActionResult> GetVisitById(VisitGetDTO PetId)
        {
            var data = await _repository.GetById(PetId.id);
            return Ok(data);
        }

        [HttpDelete("delete/{id:int}")]
        public async Task<IActionResult> DeleteOwner(int id)
        {
            await _repository.Remove(await _repository.GetById(id));
            return Ok();
        }

       [HttpPost("update")]
        public async Task<IActionResult> UpdateOwner(VisitEditDTO editDT0)
        {
            Visit visit = await _repository.GetById(editDT0.Id);

            visit.CreatedDate = DateTime.UtcNow;
            visit.visit_date = editDT0.visit_date;
            visit.visit_notes = editDT0.visit_notes;
            visit.med_visit_summary = editDT0.med_visit_summary;
            visit.visit_category = editDT0.visit_category;
            visit.vet_id = editDT0.vet_id;
            _repository.Update(visit);

            return Ok();
        }
    }
}
