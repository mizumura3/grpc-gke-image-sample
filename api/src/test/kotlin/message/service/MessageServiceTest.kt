package message.service

import com.google.protobuf.ByteString
import com.ninja_squad.dbsetup_kotlin.dbSetup
import io.grpc.testing.GrpcServerRule
import message.Application
import message.generated.grpc.MessageGrpc
import message.generated.grpc.MessageOuterClass
import message.repository.MessageRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner
import javax.sql.DataSource

@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class))
class MessageServiceTest {

    @get:Rule var rule = GrpcServerRule().directExecutor()
    @Autowired private lateinit var testDataSource: DataSource
    @Autowired private lateinit var messageRepository: MessageRepository

    @Before
    fun before() {
        rule.serviceRegistry.addService(MessageHandler(messageRepository))

        dbSetup(to = testDataSource) {
            deleteAllFrom("messages")
        }.launch()
    }

    @Test
    fun postMessage() {
        var blockingStub = MessageGrpc.newBlockingStub(rule.channel)
        var model = blockingStub.postMessage(MessageOuterClass
                .PostMessageRequest
                .newBuilder()
                .setMessage(message()).build())

        assertThat(model.id).isNotNull()
        assertThat(model.image).isEqualTo(ByteString.copyFrom(MessageServiceTest::class.java
                .getResourceAsStream("/korn.jpeg")
                .use { it.readBytes() }))
    }

    private fun message() =
            MessageOuterClass
                    .MessageModel
                    .newBuilder()
                    .setImage(ByteString
                            .copyFrom(MessageServiceTest::class.java
                                    .getResourceAsStream("/korn.jpeg")
                    .use { it.readBytes() }))
}