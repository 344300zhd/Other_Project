package news.Bean;

import org.springframework.stereotype.Component;

@Component
public class Admin {
    private String AdminID;
    private String AdminName;
    private String AdminType;
    private String AdminPwd;
    private String LastLoginTime;

    public String getAdminID() {
        return AdminID;
    }

    public String getAdminName() {
        return AdminName;
    }

    public String getAdminType() {
        return AdminType;
    }

    public String getAdminPwd() {
        return AdminPwd;
    }

    public String getLastLoginTime() {
        return LastLoginTime;
    }

    public void setAdminID(String adminID) {
        AdminID = adminID;
    }

    public void setAdminName(String adminName) {
        AdminName = adminName;
    }

    public void setAdminType(String adminType) {
        AdminType = adminType;
    }

    public void setAdminPwd(String adminPwd) {
        AdminPwd = adminPwd;
    }

    public void setLastLoginTime(String lastLoginTime) {
        LastLoginTime = lastLoginTime;
    }

    @Override
    public String toString() {
        return "Admin{" +
                "AdminID='" + AdminID + '\'' +
                ", AdminName='" + AdminName + '\'' +
                ", AdminType='" + AdminType + '\'' +
                ", AdminPwd='" + AdminPwd + '\'' +
                ", LastLoginTime='" + LastLoginTime + '\'' +
                '}';
    }
}
