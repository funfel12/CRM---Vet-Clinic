using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.ServiceDtos
{
    public class ServiceEditDTO
    {
        [Required(ErrorMessage = "Id jest wymagane")]
        public int Id { get; set; }
        [Required(ErrorMessage = "Nazwa usługi jest wymagana")]
        public String serv_name { get; set; }
        [Required(ErrorMessage = "Deskrypcja usługi jest wymagana")]
        public String serv_description { get; set; }

    }
}
