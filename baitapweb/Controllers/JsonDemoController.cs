using baitapweb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace baitapweb.Controllers
{
    public class JsonDemoController : Controller
    {
        public List<FilmModel> GetFilms()
        {
            var FilmsList = new List<FilmModel>
            {
                new FilmModel
                {
                    FilmId = 1,
                    FilmImg ="imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmName = "Ram",
                    FilmDescription = "Mindfire Solutions",
                    FilmDate ="2022-08-09"
                },
                new FilmModel
                {
                    FilmId = 2,
                    FilmImg ="imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmName = "chand",
                    FilmDescription = "Mindfire Solutions",
                    FilmDate ="2022-08-09"
                },
                new FilmModel
                {
                    FilmId = 3,
                    FilmImg ="imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmName = "Abc",
                    FilmDescription = "Abc Solutions",
                    FilmDate ="2022-08-09"
                },
                new FilmModel
                {

                    FilmId = 4,
                    FilmName = "cù lao xác sống",
                    FilmDescription = "Cù Lao Xác Sống là một trong những tựa phim đầu tiên do Việt Nam sản xuất có liên quan đến zombie. Bối cảnh cũng thân thuộc, hóa trang tốt, nhưng mà liệu phim có cuốn hút như chúng ta",
                    FilmImg = "imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmDate = "2022-08-09",
                },
                new FilmModel
                {
                    FilmId = 5,
                    FilmName = "cù lao xác sống",
                    FilmDescription = "Cù Lao Xác Sống là một trong những tựa phim đầu tiên do Việt Nam sản xuất có liên quan đến zombie. Bối cảnh cũng thân thuộc, hóa trang tốt, nhưng mà liệu phim có cuốn hút như chúng ta",
                    FilmImg = "imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmDate = "2022-08-09",
                },
                new FilmModel
                {
                    FilmId = 5,
                    FilmName = "cù lao xác sống",
                    FilmDescription = "Cù Lao Xác Sống là một trong những tựa phim đầu tiên do Việt Nam sản xuất có liên quan đến zombie. Bối cảnh cũng thân thuộc, hóa trang tốt, nhưng mà liệu phim có cuốn hút như chúng ta",
                    FilmImg = "imageJsonDemo/Em-va-Trinh-6-banner-e1654623540955-1920x1080.jpg",
                    FilmDate = "2022-08-09",
                }
            };

            return FilmsList;
        }

        public JsonResult GetFilmsData()
        {
            var Films = GetFilms();
            return Json(Films, JsonRequestBehavior.AllowGet);
        }

       

        public ActionResult BaiNam()
        {
            return View();
        }
    }
}