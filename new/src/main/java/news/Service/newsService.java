package news.Service;

import news.Bean.News;
import java.util.List;

public interface newsService {

    List<News> getNewsList(int offset,int limit);
    int selectCount();
    int addNews(String NewsTitle,String NewsContent);
    int updateNews(String NewsID,News nNews);
    int deleteNews(String NewsID);
    List<News> selectById(String NewsID);
}
