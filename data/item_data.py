from data.base_data import BaseData

__author__ = 'Ashkan'


class ItemData(BaseData):

    def get_items_in_catalog(self, catalog_id):
        """
        This method will get a list of all the items in a catalog
        @param catalog_id: number id of the catalog we want to get its items
        @return: list of catalog models
        """
        pass

    def get_item_detail_by_id(self, item_id):
        """
        This method will return details of an specific Item
        @param item_id: number id of the item we want to get its details
        @return: item model populated with all the details
        """
        pass