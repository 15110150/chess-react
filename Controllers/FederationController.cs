using ChessResult.Service.Infrastucture;
using System.Web.Mvc;

namespace ChessResult.Web.Controllers
{
    public class FederationController : Controller
    {
        private IFederationService _federationService;

        public FederationController(IFederationService federationService)
        {
            _federationService = federationService;
        }

        public JsonResult GetAll()
        {
            var result = _federationService.GetAll();
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}