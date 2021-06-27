package news.Service;

import news.Bean.Admin;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface adminService {
    int adminLogin( String AdminName,String AdminPwd);
    List<Admin> getAdminList(@Param("offset") int offset, @Param("limit") int limit);
    int selectCount();
}
