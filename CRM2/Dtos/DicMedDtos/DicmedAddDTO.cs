using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.DicMedDtos
{
    public class DicmedAddDTO
    {
        [Required(ErrorMessage = "Zapytanie musi zawierać nazwe medykamentów")]
        public String dic_meds_name { get; set; }
        [Required(ErrorMessage = "Zapytanie musi zawierać cene medykamentów")]
        public decimal Price { get; set; }

    }
}
