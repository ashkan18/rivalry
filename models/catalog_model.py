from models.base_model import BaseModel

__author__ = 'Ashkan'


class CatalogModel(BaseModel):
    """
    This class defines a model for Catalog
    """
    id = None
    issue_number = None
    theme_id = None
    date_issued = None

    def __init__(self, data_row):
        super(data_row)
