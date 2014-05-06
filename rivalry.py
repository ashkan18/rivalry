from services import catalog_service, item_service

__author__ = 'Ashkan'

from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/catalog/', methods=['GET'])
def get_current_catalog():
    """
    This interface returns the current issue of the catalog
    sample curl:
        curl -X GET http://localhost:999/catalog/
    """
    print "======>"
    current_catalog = catalog_service.get_current_catalog()
    print "----------->{0}".format(current_catalog)
    return jsonify(catalog=current_catalog)

@app.route('/catalog/items/<int:catalog_id>', methods=['GET'])
def get_catalog_items(catalog_id):
    items = item_service.get_items_for_catalog(catalog_id)
    return jsonify(items=items)

@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404
