package news.Controller;

import news.Bean.News;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import news.ServiceImpl.newsServiceImpl;

import java.util.*;

@Controller
public class newsController {
    @Autowired
    newsServiceImpl newImpl;

    @RequestMapping(value = "news")
    public String news() {
        return "admin/news";
    }

    @RequestMapping(value = "newsAdd")
    public String ADD() {
        return "admin/newsAdd";
    }

    @RequestMapping(value = "/getNewsList", method = RequestMethod.GET)
    public ModelAndView getNewsList(@RequestParam(value = "pageNo", defaultValue = "1") Integer pageNo) {
        ModelAndView mv = new ModelAndView("admin/news");//指示跳转到这个页面
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

    @RequestMapping(value = "/addNews", method = RequestMethod.POST)
    @ResponseBody
    public void addNews(@RequestParam("newsTitle") String newsTitle, @RequestParam("newsContent") String newsContent) {
        newImpl.addNews(newsTitle, newsContent);
    }

    @RequestMapping(value = "/deleteNews", method = RequestMethod.POST)
    @ResponseBody
    public void deleteNew(@RequestParam(value = "NewsId") String NewsId) {
        int i = newImpl.deleteNews(NewsId);
        if (i == 1) {
            System.out.println("删除成功");
        } else {
            System.out.println("删除失败");
        }
    }

    @RequestMapping(value = "/goGo",method = RequestMethod.POST)
    public ModelAndView getTheId(@RequestParam("NewsId") String NewsId){
        ModelAndView mv=new ModelAndView("admin/newsEdit");
        String theId=NewsId;
        mv.addObject("theId",theId);
        return mv;
    }

    @RequestMapping(value = "/updateNews" ,method = RequestMethod.POST)
    @ResponseBody
    public void up(@RequestParam("editId")String editId,@RequestParam("editTitle")String ediTitle,
                   @RequestParam("editContent")String editContent){
        News ne=new News();
        ne.setNewsTitle(ediTitle);
        ne.setNewsContent(editContent);
         int i=newImpl.updateNews(editId,ne);
         if(i==1){
             System.out.println("更改成功");
         }else{
             System.out.println("更改失败");
         }
    }


    }
