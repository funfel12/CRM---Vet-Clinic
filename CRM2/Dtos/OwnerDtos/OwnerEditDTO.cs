using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.OwnerDtos
{
    public class OwnerEditDTO
    {

        public int Id { get; set; }
        [Required(ErrorMessage = "Imie jest wymagana")]
        public String owner_first_name { get; set; }

        [Required(ErrorMessage = "Nazwisko jest wymagane")]
        public String owner_last_name { get; set; }

        [Required(ErrorMessage = "Adres jest wymagany")]
        public String owner_adress { get; set; }

        [Required(ErrorMessage = "Miasto jest wymagane")]
        public String owner_city { get; set; }

        [Required(ErrorMessage = "Telefon jest wymagany")]
        public String owner_telephone { get; set; }

        [Required(ErrorMessage = "Eamil jest wymagany")]
        public String owner_email { get; set; }
    }
}
