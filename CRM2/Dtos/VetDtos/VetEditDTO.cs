using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.VetDtos
{
    public class VetEditDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Imie jest wymagana")]
        public String vet_name { get; set; }
        [Required(ErrorMessage = "Adres jest wymagane")]
        public String vet_adress { get; set; }
        [Required(ErrorMessage = "Miasto jest wymagane")]
        public String vet_city { get; set; }
        [Required(ErrorMessage = "Miasto jest wymagane")]
        public String vet_state { get; set; }
        [Required(ErrorMessage = "Województwo jest wymagane")]
        public String vet_zip { get; set; }
        [Required(ErrorMessage = "Kod pocztowy jest wymagany")]
        public String vet_phone { get; set; }
        [Required(ErrorMessage = "Email jest wymagana")]
        public String vet_email { get; set; }
        public String vet_med_rec_site { get; set; }
    }
}
