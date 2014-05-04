"""
This module has all the service layer logic related to the catalog items in Rivalry
"""
from data.item_data import ItemData

__author__ = 'Ashkan'


__item_data = ItemData()


def get_items_for_catalog(catalog_id):
    """
    Passing id of a specific catalog, this method will find all the items
    in this issue of the catalog
    @param catalog_id: number id of the catalog we want to get it items
    @return: list of item models
    """
    pass


def get_item_detail(item_id):
    """
    Passing item id it will get the details of this item
    @param item_id: number id of the item we are looking for
    @return: ItemModel fully populated
    """
    pass

