import csv

# abrindo o arquivo csv  e removendo o símbolo de '$'
with open('src/scripts/users.csv', 'r') as infile:
    reader = csv.reader(infile)
    rows = list(reader)
for row in rows:
    row[6] = row[6].replace('$', '')
with open('src/scripts/users_clean.csv', 'w', newline='') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(rows)

# removendo a coluna ID com pandas
import pandas as pd

df = pd.read_csv('src/scripts/data/users_clean.csv')
df = df.drop(df.columns[0], axis=1)
print(df.head())


df.to_csv('src/scripts/data/dados_limpos.csv', index=False)
    