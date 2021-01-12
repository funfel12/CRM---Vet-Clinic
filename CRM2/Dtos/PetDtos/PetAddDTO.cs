using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.PetDtos
{
    public class PetAddDTO
    {
        [Required(ErrorMessage = "Nazwa zwięrzęcia jest wymagane")]
        public String pet_name { get; set; }
        [Required(ErrorMessage = "Data urodzenia jest wymagana")]
        public DateTime pet_dob { get; set; }
        [Required(ErrorMessage = "Gatunek jest wymagany")]
        public String pet_species { get; set; }
        [Required(ErrorMessage = "Rasa zwięrzęcia jest wymagana")]
        public String pet_breed { get; set; }
        [Required(ErrorMessage = "Płeć zwięrzęcia jest wymagana")]
        public String pet_sex { get; set; }
        [Required(ErrorMessage = "Kolor zwięrzęcia jest wymagany")]
        public String pet_color { get; set; }
        [Required(ErrorMessage = "Id właścciela jest wymagane")]
        public int owner_id { get; set; }

    }
}
