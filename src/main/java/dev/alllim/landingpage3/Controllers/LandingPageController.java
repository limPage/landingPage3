package dev.alllim.landingpage3.Controllers;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller(value = "/")
public class LandingPageController {

    @GetMapping(value = "/",produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getIndex(){

        return  new ModelAndView("landingPage3/index");

    }
}
