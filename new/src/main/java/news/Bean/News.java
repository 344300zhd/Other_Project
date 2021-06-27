package news.Bean;

import org.springframework.stereotype.Component;

@Component
public class News {
    private String NewsID;
    private String NewsTitle;
    private String NewsContent;
    private String NewsTime;
    private String AdminName;

    public String getNewsID() {
        return NewsID;
    }

    public String getNewsTitle() {
        return NewsTitle;
    }

    public String getNewsContent() {
        return NewsContent;
    }

    public String getNewsTime() {
        return NewsTime;
    }

    public String getAdminName() {
        return AdminName;
    }

    public void setNewsID(String newsID) {
        NewsID = newsID;
    }

    public void setNewsTitle(String newsTitle) {
        NewsTitle = newsTitle;
    }

    public void setNewsContent(String newsContent) {
        NewsContent = newsContent;
    }

    public void setNewsTime(String newsTime) {
        NewsTime = newsTime;
    }

    public void setAdminName(String adiminName) {
        AdminName = adiminName;
    }

    @Override
    public String toString() {
        return "User{" +
                "NewsID='" + NewsID + '\'' +
                ", NewsTitle='" + NewsTitle + '\'' +
                ", NewsContent='" + NewsContent + '\'' +
                ", NewsTime='" + NewsTime + '\'' +
                ", AdminName='" + AdminName + '\'' +
                '}';
    }
}
