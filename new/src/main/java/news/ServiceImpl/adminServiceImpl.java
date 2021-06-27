package news.ServiceImpl;

import news.Bean.Admin;
import news.Dao.adminDao;
import news.Service.adminService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "adminServiceImpl")
public class adminServiceImpl implements adminService {
    @Autowired
    adminDao adminDao;

    public int adminLogin(String adminName,String adminPwd) {
         return adminDao.adminLogin(adminName,adminPwd);
    }

    public List<Admin> getAdminList(@Param("offset") int offset, @Param("limit") int limit){
        return adminDao.getAdminList(offset,limit);
    }

    public int selectCount(){
        return adminDao.selectCount();
    }
}



