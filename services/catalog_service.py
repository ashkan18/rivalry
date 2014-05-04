"""
This module has all service layer related functions for handling Catalog related functionality
"""
from data.catalog_data import CatalogData

__catalog_data = CatalogData()


def get_current_catalog():
    """
    This method gets the latest catalog information
    @return: Catalog model of the latest issue
    """
    # first get the issue number of the latest catalog
    latest_issue_number_row = __catalog_data.get_latest_catalog_issue_number()

    # get the details of the latest issue
    current_catalog = __catalog_data.get_catalog_by_issue_number(latest_issue_number_row['issue_number'])

    return current_catalog
