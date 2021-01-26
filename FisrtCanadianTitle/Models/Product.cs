using System;
using System.Collections.Generic;

#nullable disable

namespace FisrtCanadianTitle.Models
{
    public partial class Product
    {
        public Product()
        {
            Purchases = new HashSet<Purchase>();
        }

        
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public decimal? ProductPrice { get; set; }

        public virtual ICollection<Purchase> Purchases { get; set; }
    }
}
