from sqlalchemy import text
from data.base_data import BaseData

__author__ = 'Ashkan'


class CatalogData(BaseData):

    def get_latest_catalog_issue_number(self):
        """
        This method will return the issue number of the latest catalog
        @return: number referring to latest issue of the catalog
        """
        sql = text("""SELECT MAX(issue_number) as issue_number FROM catalog""")
        return self.select_one(sql=sql)

    def get_catalog_by_issue_number(self, issue_number):
        """
        This method will return a catalog based on the issue number
        @param issue_number: number of the requested issue
        @return: CatalogModel fully populated
        """
        sql = text("""SELECT id, issue_number, issue_tag_line, theme_id, created_date
                      FROM catalog
                      WHERE issue_number = :issue_number""")
        return self.select_one(sql=sql, issue_number=issue_number)