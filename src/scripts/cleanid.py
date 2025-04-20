import pandas as pd

df = pd.read_csv('src/scripts/data/users_clean.csv')
df = df.drop(df.columns[0], axis=1)
print(df.head())


df.to_csv('src/scripts/data/dados_limpos.csv', index=False)