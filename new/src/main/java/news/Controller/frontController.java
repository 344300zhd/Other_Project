package news.Controller;

import news.Bean.News;
import news.ServiceImpl.newsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;


@Controller
public class frontController {
    @Autowired
    newsServiceImpl newImpl;
    @RequestMapping(value = "index")
    public String frontMain(){
        return "front/index";
    }

    @RequestMapping(value = "contact")
    public String contact(){
        return "front/contact";
    }

    @RequestMapping(value = "content")
    public String content(){
        return "front/content";
    }

    @RequestMapping("test")
    public String test(){
        return "front/test";
    }

    @RequestMapping(value = "newsFrontDetail")
    public String newsFrontDetail(){
        return "front/newsFrontDetail";
    }

    @RequestMapping(value = "about")
    public String about(){
        return "front/about";
    }

    @RequestMapping(value = "newsFrontList")
    public String newsFrontList(){
        return "front/newsFrontList";
    }


    @RequestMapping(value = "/getFrontNewsList", method = RequestMethod.GET)
    public ModelAndView getNewsList(@RequestParam(value = "pageNo", defaultValue = "1") Integer pageNo) {
        ModelAndView mv = new ModelAndView("front/newsFrontList");//指示跳转到这个页面
        int limit = 5;
        int offset = (pageNo - 1) * limit;
        List<News> news = newImpl.getNewsList(offset, limit);
        //获取总的记录数
        int totalItems = newImpl.selectCount();
        //获取总的页数
        int temp = totalItems / limit;
        int totalPages = (totalItems % limit == 0) ? temp : temp + 1;
        //当前页数
        int curPage = pageNo;

        //将上述查询结果放到Model中，在JSP页面中可以进行展示
        mv.addObject("news", news)
                .addObject("totalItems", totalItems)
                .addObject("totalPages", totalPages)
                .addObject("curPage", curPage);
        return mv;
    }

    @RequestMapping(value = "/getContent",method = RequestMethod.GET)
    public ModelAndView getContent(@RequestParam("newsId") String newsId){
        ModelAndView mv=new ModelAndView("front/newsFrontDetail");
        List<News> listNews=newImpl.selectById(newsId);
        mv.addObject("listNews",listNews);
        return mv;
    }
}
