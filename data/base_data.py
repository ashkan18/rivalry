from sqlalchemy import create_engine
from config.rivalry_config import DataBase

__author__ = 'Ashkan'


def make_data_connection():
    """
    Creates connection to SQLAlchemy engine, which is the connection to the connection pool.
    This will be called when this module is instantiated, which usually happens once per process,
    except when processes are forked (e.g. worker jobs).

    When a process is forked, a new connection must be made to SQLAlchemy because the connection
    does not span across forked processes. This can result in some pretty nasty behavior, such
    as causing SSL to fail (e.g. no connection to the server, SSL SYSCALL error: EOF detected,
    or bad record mac). More details:
        http://docs.sqlalchemy.org/ru/latest/core/connections.html
        https://devcenter.heroku.com/articles/forked-pg-connections
    """

    global _engine  # pylint: disable=W0603

    db_url = 'postgres://{0}:{1}@{2}:{3}/{4}'.format(DataBase.USER,
                                                     DataBase.PASSWORD,
                                                     DataBase.HOST,
                                                     DataBase.PORT,
                                                     DataBase.DB_NAME)
    _engine = create_engine(db_url, echo=DataBase.ECHO)


_engine = None  # pylint: disable=C0103
make_data_connection()


class BaseData():
    """
    This class will have all the basic data layer logic (connect to database, etc) that will be shared
    between all the other data layer modules,
    All data layer classes should inherit from this class
    """
    def select_one(self, sql, **kwargs):
        data = _engine.execute(sql, **kwargs)

        if data is not None and data.rowcount > 0:
            row = data.fetchone()
            print '--=-=-111=> {0}'.format(row)
            print '--=-=-222=> {0}'.format(dict(row))
            print '--=-=-333+> {0}'.format(self.row2dict())
            return self.row2dict(row)
        else:
            return None

    def select_all(self, sql, **kwargs):
        result = _engine.execute(sql, **kwargs)

        if result.returns_rows:
            fetched_result = result.fetchall()
            return fetched_result
        else:
            return None

    def row2dict(self, row):
        d = {}
        for column in row.__table__.columns:
            d[column.name] = str(getattr(row, column.name))

        return d
