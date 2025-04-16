import csv

# abrindo o arquivo csv 
with open('src/scripts/users.csv', 'r') as infile:
    reader = csv.reader(infile)
    rows = list(reader)
for row in rows:
    row[6] = row[6].replace('$', '')
with open('src/scripts/users_clean.csv', 'w', newline='') as outfile:
    writer = csv.writer(outfile)
    writer.writerows(rows)

    