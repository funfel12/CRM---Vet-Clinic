using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.VaccineDtos
{
    public class VaccineEditDTO
    {
        [Required(ErrorMessage = "Id jest wymagane")]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nazwa szczepionki jest wymagany")]
        public string vaccine_name { get; set; }
        [Required(ErrorMessage = "Opis szczepionki jest wymagany")]
        public string vaccine_description { get; set; }
        [Required(ErrorMessage = "Seria szczepionki jest wymagana")]
        public string vaccine_series_num { get; set; }
        [Required(ErrorMessage = "Data podania jest wymagana")]
        public DateTime vaccine_date_given { get; set; }
        [Required(ErrorMessage = "Data upłynięcia ważności jest wymagana")]
        public DateTime vaccine_date_expires { get; set; }
        [Required(ErrorMessage = "Notatka jest wyamagana")]
        public string vaccine_notes { get; set; }
        [Required(ErrorMessage = "Id wizyty jest wymagany")]
        public int visit_id { get; set; }
    }
}
