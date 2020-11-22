
using CRM2.Data.Interface;
using CRM2.Dtos;
using CRM2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace CRM2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repository;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repository, IConfiguration config)
        {
            _repository = repository;
            _config = config;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto dtos)
        {
            dtos.Username = dtos.Username.ToLower();

            if (await _repository.UserExists(dtos.Username))
            {
                return BadRequest("Użytkownik o takiej nazwie już istnieje !");
            }

            User user = new User
            {
                Username = dtos.Username
            };

            var createdUser = await _repository.Register(user,dtos.Password);

            return StatusCode(201);
        }



        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto dtos)
        {
            var userFromRepo = await _repository.Login(dtos.Username.ToLower(),dtos.Password);

            if(userFromRepo == null) return Unauthorized();

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier,userFromRepo.Id.ToString()),
                new Claim(ClaimTypes.Name, userFromRepo.Username)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.Now.AddHours(12),
                SigningCredentials = creds
            };

            var tokenHendler = new JwtSecurityTokenHandler();
            var token = tokenHendler.CreateToken(tokenDescriptor);

            return Ok(new { token = tokenHendler.WriteToken(token) });
            
        }




    }
}
