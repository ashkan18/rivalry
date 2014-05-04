__author__ = 'Ashkan'


class BaseModel():
    """
    This is the Base Model class that all of our models should inherit from,
    This class will implement all the common code between models
    """

    def __init__(self, data_row):
        # this constructor gets a data row (result from database) and will
        # create a model from it
        for attribute, value in self.__dict__:
            if attribute in data_row:
                setattr(self, attribute, data_row[attribute])
