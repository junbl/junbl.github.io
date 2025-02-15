
import os
import json

path = "src/static/d66/"
files = [f for f in os.listdir(path) if f.endswith(".json")]
with open(os.path.join(path, "crucibles.json"), "w") as f:
    json.dump(files, f)

