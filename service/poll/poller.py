import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()



from service_rest.models import AutomobileVO
# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something



def get_vin():
    response=requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
    content=json.loads(response.content)
    for vin in content["vin"]:
        AutomobileVO.objects.update_or_create(
            import_href=vin["href"],
            defaults={"name": vin["vin"]}, 
        )


def poll(repeat=True):
    while True:
        print('Automobile poller polling for data')
        try:
            get_vin()
        except Exception as e:
            print(e, file=sys.stderr)
        if(not repeat):
            break
        time.sleep(60)


if __name__ == "__main__":
    poll()
