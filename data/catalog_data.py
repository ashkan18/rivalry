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

    def get_item_by_catalog_id_side(self, catalog_id, side):
        """
        This method returns items in the catalog for specific catalog id and on specific side
        @param catalog_id: int number of catalog id
        @param side: int coming from CatalogSide setting which side of catalog we want to get
        """
        sql = text("""SELECT i.name, a.firs_tname, a.last_name
                      FROM catalog_item AS ci
                      JOIN item AS i on (i.id = ci.item_id)
                      JOIN item_artist AS ia on (ia.item_id = i.id)
                      JOIN artist as a on (a.id = ia.artist_id)
                      WHERE ci.catalog_id = :catalog_id
                      AND ci.item_side = :side""")
        return self.select_all(sql=sql, catalog_id=catalog_id, side=side)