package news.Controller;

import news.Bean.Admin;
import news.ServiceImpl.adminServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Controller
public class AdminController {
    @Autowired
    adminServiceImpl adminImpl;
    @RequestMapping(value ="login")
    public String login(){
        return "admin/login";
    }

    @RequestMapping(value ="main")
    public String main(){
        return "admin/adminUser";
    }

    @RequestMapping(value = "adminUser")
    public String adminUser(){
        return "admin/adminUser";
    }

    @RequestMapping(value = "/doLogin",method = RequestMethod.POST)
    @ResponseBody
    public void doLogin(@RequestParam("User") String User, @RequestParam("Pwd") String Pwd){
      adminImpl.adminLogin(User,Pwd);
    }

    @RequestMapping(value = "/getAdminList", method = RequestMethod.GET)
    public ModelAndView getEmp(@RequestParam(value = "pageNo", defaultValue = "1") Integer pageNo){
        ModelAndView mv = new ModelAndView("admin/adminUser");//指示跳转到这个页面
        int limit = 5;
        // 记录的偏移量(即从第offset行记录开始查询)，
        // 如第1页是从第1行(offset=(21-1)*5=0,offset+1=0+1=1)开始查询；
        // 第2页从第6行(offset=(2-1)*5=5,offset+1=5+1=6)记录开始查询
        int offset = (pageNo-1)*limit;
        //获取指定页数包含的员工信息
        List<Admin> Admin = adminImpl.getAdminList(offset,limit);
        //获取总的记录数

        int totalItems =adminImpl.selectCount();
        //获取总的页数
        int temp = totalItems / limit;
        int totalPages = (totalItems % limit == 0) ? temp : temp+1;
        //当前页数
        int curPage = pageNo;

        //将上述查询结果放到Model中，在JSP页面中可以进行展示
        mv.addObject("message", Admin)
                .addObject("totalItems", totalItems)
                .addObject("totalPages", totalPages)
                .addObject("curPage", curPage);
        return mv;
    }
    }

