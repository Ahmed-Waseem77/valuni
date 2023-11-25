from sqlalchemy import create_engine
import pandas as pd

def Populate():
    Names = ["Courses", "Instructors", "Users", "Teach", "Take", "Review"]
    CSVs = ["csvs/Courses.csv", "csvs/Instructors.csv", "csvs/Users.csv", "csvs/Teach.csv", "csvs/Take.csv", "csvs/Reviews.csv"]
    for i in range(len(CSVs)):
        df = pd.read_csv(CSVs[i], encoding="utf-8")
        df = df.where(pd.notna(df), None)

        db_user = "root"
        db_password = "Heggi_2002"
        db_host = "localhost"
        db_port = "3306"
        db_name = "VALUNI"

        engine_str = f"mysql+pymysql://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}"
        engine = create_engine(engine_str)
        table_name = Names[i]
        df.to_sql(table_name, con=engine, if_exists="append", index=False)
        engine.dispose()

Populate()

