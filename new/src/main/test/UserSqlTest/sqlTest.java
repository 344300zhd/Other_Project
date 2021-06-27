package UserSqlTest;
import news.Bean.News;
import news.ServiceImpl.adminServiceImpl;
import news.ServiceImpl.newsServiceImpl;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class sqlTest {
    @Test
    public void adminLogin() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        adminServiceImpl admin = (adminServiceImpl) ctx.getBean("adminServiceImpl");
         admin.adminLogin("1", "1");
    }

    @Test
    public void selectCount() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        adminServiceImpl admin = (adminServiceImpl) ctx.getBean("adminServiceImpl");
        int i = admin.selectCount();
        System.out.println("数据库的记录总数:" + i);
    }

    @Test
    public void getAdminList() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        adminServiceImpl admin = (adminServiceImpl) ctx.getBean("adminServiceImpl");
        System.out.println(admin.getAdminList(0, 5).toString());

    }

    @Test
    public void addNews() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        newsServiceImpl news = (newsServiceImpl) ctx.getBean("newsServiceImpl");
        int i = news.addNews("资治通鉴", "这是一本好书");
        System.out.println(i);
    }

    @Test
    public void updateNews() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        newsServiceImpl news = (newsServiceImpl) ctx.getBean("newsServiceImpl");
        News n = new News();
        n.setNewsTitle("改过后的标题");
        n.setNewsContent("改过后的内容");
        System.out.println(news.updateNews("14", n));
    }

    @Test
    public void deleteNews() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        newsServiceImpl news = (newsServiceImpl) ctx.getBean("newsServiceImpl");
        System.out.println(news.deleteNews("14"));
    }

    @Test
    public void selectById() {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("spring/spring-context.xml");
        newsServiceImpl news = (newsServiceImpl) ctx.getBean("newsServiceImpl");
        System.out.println(news.selectById("23").toString());
    }
}
