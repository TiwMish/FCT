using System;
using System.Collections.Generic;

#nullable disable

namespace FisrtCanadianTitle.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Purchases = new HashSet<Purchase>();
        }

        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

        public virtual ICollection<Purchase> Purchases { get; set; }
    }
}
