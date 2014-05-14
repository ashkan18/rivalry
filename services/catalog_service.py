"""
This module has all service layer related functions for handling Catalog related functionality
"""
from flask import app
from data.catalog_data import CatalogData

__catalog_data = CatalogData()


class CatalogSides:
    ASH_SIDE = 1
    MOZH_SIDE = 2


def get_current_catalog():
    """
    This method gets the latest catalog information
    @return: Catalog model of the latest issue
    """
    # first get the issue number of the latest catalog
    latest_issue_number_row = __catalog_data.get_latest_catalog_issue_number()
    # get the details of the latest issue
    current_catalog = __catalog_data.get_catalog_by_issue_number(latest_issue_number_row['issue_number'])

    current_catalog['ashSide'] = __catalog_data.get_item_by_catalog_id_side(current_catalog['id'],
                                                                            CatalogSides.ASH_SIDE)
    current_catalog['mozhSide'] = __catalog_data.get_item_by_catalog_id_side(current_catalog['id'],
                                                                             CatalogSides.MOZH_SIDE)

    return current_catalog
