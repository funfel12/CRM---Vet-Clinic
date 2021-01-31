using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.ServiceDtos
{
    public class ServiceAddDTO
    {
        [Required(ErrorMessage = "Nazwa usługi jest wymagana")]
        public String serv_name { get; set; }
        [Required(ErrorMessage = "Deskrypcja usługi jest wymagana")]
        public String serv_description { get; set; }
        [Required(ErrorMessage = "Deskrypcja usługi jest wymagana")]
        public String med_prescription { get; set; }
        [Required(ErrorMessage = "Id usługi jest wymagany")]
        public int visit_id { get; set; }
    }
}
