package news.Dao;

import news.Bean.News;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NewsDao {

    List<News> getNewsList(@Param("offset") int offset, @Param("limit") int limit);
    int selectCount();
    int addNews(@Param("NewsTitle") String NewsTitle,@Param("NewsContent") String NewsContent);
    int updateNews(@Param("NewsID") String NewsID,@Param("nNew")News nNew);
    int deleteNews(@Param("NewsID")String NewsID);
    List<News> selectById(@Param("NewsID")String NewsID);

}
