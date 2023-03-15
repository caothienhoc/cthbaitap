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

namespace baitapweb.Controllers
{
    public class EasyUiController : Controller
    {
        // GET: EasyUi
        public async Task<JsonResult> GetEasyUiUser(string id)
        {
            
            string url3 = "https://jsonplaceholder.typicode.com/users";
            var EasyUiUserInfo = new List<easyuiUser>();
            var x = new ListeasyuiUser();

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(url3);
                client.DefaultRequestHeaders.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //HttpResponseMessage Res = await client.GetAsync("api/Employee/GetAllEmployee");
                HttpResponseMessage Res = await client.GetAsync("");
                if (Res.IsSuccessStatusCode)
                {
                    var EasyUiUserResponse = Res.Content.ReadAsStringAsync().Result;
                    EasyUiUserInfo = JsonConvert.DeserializeObject<List<easyuiUser>>(EasyUiUserResponse);
                }
                x.rows = EasyUiUserInfo;
                x.rows.AddRange(EasyUiUserInfo);
                x.total = x.rows.Count;

                return Json(x, JsonRequestBehavior.AllowGet);
            }

        }


        public JsonResult AddEasyUiUser(FormCollection formCollection, string id)
        {


            var user = new easyuiUser();
            user.name = formCollection["name"];
            user.username = formCollection["username"];
            user.phone = formCollection["phone"];
            user.email = formCollection["email"];


            return Json(user, JsonRequestBehavior.AllowGet);
        }





        public ActionResult BaiChin()
        {
            return View();
        }
        public ActionResult BaiMuoi()
        {
            return View();
        }
    }
}