from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()  # save user in datebase
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # when register get token to log in immediatly
            # to know who u are when logging in
            "token": AuthToken.objects.create(user)[1]
        })
# login api


class LoginAPI(generics.GenericAPIView):

    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data  # save user in datebase
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # when register get token to log in immediatly
            # to know who u are when logging in
            "token": AuthToken.objects.create(user)[1]
        })
# getuser api
# nkharaj el user mel token


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        # needs to have valide token to access
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
