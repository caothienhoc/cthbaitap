using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace baitapweb.Models
{
    public class Post
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
    public class Album
    {
        public int Id { get; set; }
        public int userId { get; set; }
        public string title { get; set; }
    }
    public class Comments
    {
        public int Id { get; set; }
        public int postId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Body { get; set; }
    }
    public class FilmModel
    {
        public int FilmId { get; set; }
        public string FilmName { get; set; }
        public string FilmDescription { get; set; }
        public string FilmImg { get; set; }
        public string FilmDate { get; set; }
    }
    public class NewUser
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public Address address { get; set; }
        public string phone { get; set; }
        public string website { get; set; }

        public Company company { get; set; }


    }
    public class Address
    {
        public object address { get; set; }
        public string street { get; set; }
        public string suite { get; set; }
        public string city { get; set; }
        public string zipcode { get; set; }

    }
    public class Company
    {
        public object company { get; set; }
        public string name { get; set; }
        public string catchPhrase { get; set; }

        public string bs { get; set; }
    }
    public class Photos
    {
        public int albumId { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string url { get; set; }
        public string thumbnailUrl { get; set; }
    }
    public class Todos
    {
        public int userId { set; get; }
        public int id { set; get; }
        public string title { set; get; }
        public bool completed { set; get; }
    }
    public class User
    {
        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }

    }
    public class easyuiUser
    {
        public int id { get; set; }
        public string name { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    }
    public class ListeasyuiUser
    {
        public int total { get; set; }
        public List<easyuiUser> rows { get; set; }
    }
}