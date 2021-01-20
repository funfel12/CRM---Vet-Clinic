using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.DicVaccineDtos
{
    public class DicVaccineEditDTO
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Zapytanie musi zawierać nazwe szczepionki")]
        public String dic_vaccines_name { get; set; }
        [Required(ErrorMessage = "Zapytanie musi zawierać cene szczepionki")]
        public decimal Price { get; set; }
    }
}
