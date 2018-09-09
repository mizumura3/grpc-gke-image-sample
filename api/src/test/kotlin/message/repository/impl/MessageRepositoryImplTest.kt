package message.repository.impl

import message.Application
import message.domain.Message
import message.repository.MessageRepository
import org.junit.Test

import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class))
class MessageRepositoryImplTest {

    @Autowired private lateinit var messageRepository: MessageRepository

    @Test
    fun create() {
        MessageRepositoryImplTest::class.java.getResourceAsStream("/korn.jpeg").use {
            messageRepository.create(Message(null, it.readBytes()))
        }
    }
}