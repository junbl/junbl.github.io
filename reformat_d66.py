import itertools
import numpy
import sys
import json

file = sys.argv[1]
try:
    outfiles = sys.argv[2:]
except IndexError:
    outfiles = [sys.stdout]
num_tables = len(outfiles)
alternating = False

tables = [[] for _ in range(num_tables+1)]
with open(file, "r") as f:
    current_table = 0
    lineno = 0
    for line in itertools.batched(f.read().splitlines(), 6):
        if alternating:
            current_table += 1
            if current_table == num_tables:
                current_table = 0
        else:
            lineno += 1
            if lineno == 7:
                lineno = 0
                current_table += 1
        print(current_table)
        tables[current_table].append(line)
tables = [numpy.transpose(table) for table in tables]
# print(tables)
tables = [table.tolist() for table in tables]
for table, outfile in zip(tables, outfiles):
    stdout = not isinstance(outfile, str)
    if stdout:
        f = outfile
    else:
        f = open(outfile, "w")
    json.dump(table, f)
    if not stdout:
        f.close()





