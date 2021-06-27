package news.Dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import news.Bean.Admin;

import java.util.List;

@Repository
public interface adminDao {
   int adminLogin(@Param("AdminName") String AdminName,@Param("AdminPwd") String AdminPwd);
   List<Admin> getAdminList(@Param("offset") int offset,@Param("limit") int limit);
   int selectCount();
}
