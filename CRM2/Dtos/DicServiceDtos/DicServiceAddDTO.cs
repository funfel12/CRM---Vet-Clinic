using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.DicServiceDtos
{
    public class DicServiceAddDTO
    {
        [Required(ErrorMessage = "Zapytanie musi zawierać nazwe usługi")]
        public String dic_services_name { get; set; }
        [Required(ErrorMessage = "Zapytanie musi zawierać cene medykamentów")]
        public decimal Price { get; set; }
    }
}
