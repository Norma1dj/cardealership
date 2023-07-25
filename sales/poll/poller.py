import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()
from sales_rest.models import AutomobileVO
# Import models from sales_rest, here.
# from sales_rest.models import Something


def get_automobile():

    try:
        response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
        content = json.loads(response.content)
        for automobile in content["autos"]:
            AutomobileVO.objects.update_or_create(
                vin=automobile["vin"],
                defaults={
                    "vin": automobile["vin"],
                    "sold": automobile["sold"],
                }
            )

    except requests.exceptions.RequestException as e:
        print(f"Error while fetching data: {e}", file=sys.stderr)


def poll(repeat=True):
    while True:
        print('Sales poller polling for data')
        try:
            # Write your polling logic, here
            # Do not copy entire file
            get_automobile()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        
        if (not repeat):
            break

        time.sleep(1)


if __name__ == "__main__":
    poll()
