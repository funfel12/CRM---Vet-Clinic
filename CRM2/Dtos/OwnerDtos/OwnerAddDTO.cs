using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Dtos.OwnerDtos
{
    public class OwnerAddDTO
    {
        public String owner_first_name { get; set; }
  
        public String owner_last_name { get; set; }

        public String owner_adress { get; set; }
   
        public String owner_city { get; set; }
      
        public String owner_telephone { get; set; }

        public String owner_email { get; set; }
    }
}
