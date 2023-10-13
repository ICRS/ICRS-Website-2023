from django.shortcuts import render
from django.http import JsonResponse
from .models import ID
from .serializers import IDSerializer
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt

def all_people(request):
    IDs = ID.objects.all()
    print(IDs)
    serializer = IDSerializer(IDs, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def shortCode_check(request):
    if request.method != 'POST':
        print('wrong request')
        return JsonResponse({"message": "Invalid request method"}, status=405)
    
    num = request.body
    print(type(num))
    return JsonResponse({"message": 'post successful'})

def induction_checker(request, *args, **kwargs):

    return render(request, 'frontend/index.html')