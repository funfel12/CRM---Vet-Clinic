using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Owner : BaseEntity
    {
        [Key]
        public int owner_id { get; set; }
        [MaxLength(200)]
        public String owner_first_name { get; set; }
        [MaxLength(200)]
        public String owner_last_name { get; set; }
        [MaxLength(200)]
        public String owner_adress { get; set; }
        [MaxLength(200)]
        public String owner_city { get; set; }
        [MaxLength(200)]
        public String owner_telephone { get; set; }
        [MaxLength(300)]
        public String owner_email { get; set; }
        public ICollection<Pet> Pets { get; set; }

    }
}
