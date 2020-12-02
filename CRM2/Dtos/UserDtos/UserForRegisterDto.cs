using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos
{
    public class UserForRegisterDto
    {
        [Required(ErrorMessage="Nazwa użytkownika jest wymagana")]
        public String Username { get; set; }


        [Required(ErrorMessage = "Hasło jesy wymagane")]
        [StringLength(12,MinimumLength=6, ErrorMessage ="Hasło musi składać się od 4 do 8 znaków")]
        public String Password { get; set; }
    }
}
