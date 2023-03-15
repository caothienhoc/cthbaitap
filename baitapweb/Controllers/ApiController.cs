using baitapweb.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using System.Security.Policy;

namespace baitapweb.Controllers
{
    public class ApiController : Controller
    {
        // GET: Api
        public async Task<JsonResult> GetPost()
        {
            string url1 = "https://jsonplaceholder.typicode.com/ ";
            var PostInfo = new List<Post>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url1);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var PostResponse = Res.Content.ReadAsStringAsync().Result;
                    PostInfo = JsonConvert.DeserializeObject<List<Post>>(PostResponse);

                }
                return Json(PostInfo, JsonRequestBehavior.AllowGet);
            }

        }
        // GET: Comments
        public async Task<JsonResult> GetComments()
        {
            string url2 = "https://jsonplaceholder.typicode.com/comments";

            var CommentsInfo = new List<Comments>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url2);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var CommentsResponse = Res.Content.ReadAsStringAsync().Result;
                    CommentsInfo = JsonConvert.DeserializeObject<List<Comments>>(CommentsResponse);

                }
                return Json(CommentsInfo, JsonRequestBehavior.AllowGet);
            }
        }      
        //get albums
        public async Task<JsonResult> GetAlbums()
        {
            string url3 = "https://jsonplaceholder.typicode.com/albums";
            var AlbumInfo = new List<Album>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url3);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var AlbumResponse = Res.Content.ReadAsStringAsync().Result;
                    AlbumInfo = JsonConvert.DeserializeObject<List<Album>>(AlbumResponse);

                }
                return Json(AlbumInfo, JsonRequestBehavior.AllowGet);
            }

        }
        // GET: Photos
        public async Task<JsonResult> GetPhotos()
        {
            string url4 = "https://jsonplaceholder.typicode.com/photos";
            var PhotosInfo = new List<Photos>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url4);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var PhotosResponse = Res.Content.ReadAsStringAsync().Result;
                    PhotosInfo = JsonConvert.DeserializeObject<List<Photos>>(PhotosResponse);

                }
                return Json(PhotosInfo, JsonRequestBehavior.AllowGet);
            }

        }
        // GET: Todos
        public async Task<JsonResult> GetTodos()
        {
            string url5 = "https://jsonplaceholder.typicode.com/todos";
            var TodosInfo = new List<Todos>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url5);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var TodosResponse = Res.Content.ReadAsStringAsync().Result;
                    TodosInfo = JsonConvert.DeserializeObject<List<Todos>>(TodosResponse);

                }
                return Json(TodosInfo, JsonRequestBehavior.AllowGet);
            }

        }

        //get user
        public async Task<JsonResult> GetNewUsers()
        {
            string url6 = "https://jsonplaceholder.typicode.com/users";
            var UsersInfo = new List<NewUser>();
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url6);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var UsersResponse = Res.Content.ReadAsStringAsync().Result;
                    UsersInfo = JsonConvert.DeserializeObject<List<NewUser>>(UsersResponse);

                }
                return Json(UsersInfo, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult BaiTam()
        {
            return View();
        }
    }
}
