using CRM2.Models.BaseEntityModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRM2.Models
{
    public class Pet : BaseEntity
    {
        [Key]
        public int pet_id { get; set; }
        [MaxLength(200)]
        public int pet_name { get; set; }
        public DateTime pet_dob { get; set; }
        [MaxLength(200)]
        public String pet_species { get; set; }
        [MaxLength(200)]
        public String pet_breed { get; set; }
        [MaxLength(50)]
        public String pet_sex { get; set; }
        [MaxLength(100)]
        public String pet_color { get; set; }
        [MaxLength(5000)]
        public String pet_picture { get; set;}
        
        //Klucz właściciela
        public int owner_id { get; set; }
        //Wizyty
        public ICollection<Visit> Meds { get; set; }









    }
}
