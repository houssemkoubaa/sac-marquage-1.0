from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valide(raise_exception=True)
        user = serializer.save()  # save user in datebase
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context().data),
            # when register get token to log in immediatly
            # to know who u are when logging in
            "token": AuthToken.object.create(user)
        })
# login api


# getuser api
