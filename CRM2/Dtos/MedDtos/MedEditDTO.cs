using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.MedDtos
{
    public class MedEditDTO
    {
     
        [Required(ErrorMessage = "Id jest wymagany")]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nazwa leku jest wymagana")]
        public String med_name { get; set; }
        [Required(ErrorMessage = "Opis leku jesy wymagany")]
        public String med_description { get; set; }
        [Required(ErrorMessage = "Częstotliwość podawania jest wymagana")]
        public String med_dosage_freq { get; set; }
        [Required(ErrorMessage = "Początek podawania leku jest wymagany")]
        public DateTime med_start_date { get; set; }
        [Required(ErrorMessage = "Koniec podawania leku jest wymagany")]
        public DateTime med_end_date { get; set; }
        [Required(ErrorMessage = "Kategoria medykamentu")]
        public String med_category { get; set; }
        [Required(ErrorMessage = "Id wizyty jest wymagane")]
        public int visit_id { get; set; }
    }
}
