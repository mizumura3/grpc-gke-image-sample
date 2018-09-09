# Descriptions

Image file uploader with hyperapp + gRPC(Kotlin with Spring Boot) sample

## api

gRPC server side.

- Kotlin
- Spring Boot
- gRPC server

message-front

- hyperapp
- gRPC client

## start

```
cd ./message-front
npm i
```

```
cd ./k8s
kubectl apply deployment-mysql.yaml
```

```
 cd ./api
 ./gradlew bootRun
```
