using System;

namespace Udemy.API.Models
{
    public class Photo
    {
        public int Id  { get; set; }
        public string Url { get; set; }
        public string Descriptioon { get; set; }
        public DateTime Added { get; set; }
        public bool IsMain { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}