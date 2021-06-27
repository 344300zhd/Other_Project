package news.ServiceImpl;

import news.Bean.News;
import news.Dao.NewsDao;
import news.Service.newsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service(value = "newsServiceImpl")
public class newsServiceImpl implements newsService {
    @Autowired
    NewsDao newsDao;

    @Override
    public List<News> getNewsList(int offset, int limit) {
        return newsDao.getNewsList(offset, limit);
    }

    @Override
    public int selectCount() {
        return newsDao.selectCount();
    }

    @Override
    public int addNews(String NewsTitle, String NewsContent) {
        return newsDao.addNews(NewsTitle, NewsContent);
    }

    @Override
    public int updateNews(String NewsID,News nNews) {
        return newsDao.updateNews(NewsID,nNews);
    }

    @Override
    public int deleteNews(String NewsID) {
        return newsDao.deleteNews(NewsID);
    }

    @Override
    public List<News> selectById(String NewsID) {
        return newsDao.selectById(NewsID);
    }
}

