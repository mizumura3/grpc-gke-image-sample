package message.handler

import com.google.protobuf.ByteString
import io.grpc.stub.StreamObserver
import message.domain.Message
import message.generated.grpc.MessageGrpc
import message.generated.grpc.MessageOuterClass
import message.repository.MessageRepository
import org.lognet.springboot.grpc.GRpcService

@GRpcService
class MessageHandler(private val messageRepository: MessageRepository) : MessageGrpc.MessageImplBase() {
    override fun postMessage(request: MessageOuterClass.PostMessageRequest, responseObserver: StreamObserver<MessageOuterClass.PostMessageResponse>) {

        var message = messageRepository.create(Message(null, request.message.image.toByteArray()))

        message.id?.let {
            var replyBuilder = MessageOuterClass.PostMessageResponse.newBuilder()
            replyBuilder.setId(it)
            replyBuilder.setImage(ByteString.copyFrom(message.image))
            responseObserver.onNext(replyBuilder.build())
        }
        responseObserver.onCompleted()
    }

    override fun items(request: MessageOuterClass.ItemsRequest?, responseObserver: StreamObserver<MessageOuterClass.ItemsResponse>?) {
        val items = messageRepository.items().map {
            val builder = MessageOuterClass.ItemsResponse.newBuilder()
            it.id.let { it1 -> builder.addItemsBuilder().setId(it1) }
            builder.addItemsBuilder()
                    .setImage(ByteString.copyFrom(it.image))
                    .build()
        }

        val builder = MessageOuterClass.ItemsResponse.newBuilder()
        builder.addAllItems(items)
        responseObserver?.onNext(builder.build())
        responseObserver?.onCompleted()
    }
}