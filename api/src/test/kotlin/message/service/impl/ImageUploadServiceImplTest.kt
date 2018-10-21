package message.service.impl

import message.Application
import message.service.ImageUploadService
import org.junit.Test
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class))
class ImageUploadServiceImplTest {
    @Autowired
    lateinit var service: ImageUploadService

    @Test
    fun upload() {
        ImageUploadServiceImplTest::class.java.getResourceAsStream("/korn.jpeg").use {
            service.upload("korn.jpeg", it.readBytes())
        }
    }
}